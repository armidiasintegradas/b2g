/**
 * B2G — Telemetria Analítica & dataLayer Engine
 *
 * Em conformidade rigorosa com b2g-measurement-plan.md:
 * - Sem IDs fictícios de produção injetados em código estático
 * - Sem coleta de dados pessoais sensíveis (LGPD / Sigilo Médico)
 * - Duplo disparo em CTAs de conversão: cta_click + whatsapp_click
 * - Suporte a scroll_50 e scroll_90
 */

// Inicializa dataLayer canônico
window.dataLayer = window.dataLayer || [];

export function pushEvent(eventName, params = {}) {
  const payload = {
    event: eventName,
    timestamp: Date.now(),
    ...params,
  };
  window.dataLayer.push(payload);
  if (window.__B2G_DEBUG_TRACKING__) {
    console.log('[B2G TRACKING]', payload);
  }
}

/**
 * Trata clique em botões de ação e WhatsApp
 */
export function trackCtaClick({ location, label, destination = 'whatsapp' }) {
  // 1. Evento cta_click genérico
  pushEvent('cta_click', {
    cta_location: location,
    cta_label: label,
    destination: destination,
  });

  // 2. Se o destino for WhatsApp oficial, dispara whatsapp_click complementar
  if (destination === 'whatsapp') {
    pushEvent('whatsapp_click', {
      cta_location: location,
      cta_label: label,
      destination: 'whatsapp',
      whatsapp_number: '5561994524838',
    });
  }
}

/**
 * Rastreamento de scroll depth (50% e 90%)
 */
let scroll50Dispatched = false;
let scroll90Dispatched = false;

export function initScrollTracking() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;

    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= 50 && !scroll50Dispatched) {
      scroll50Dispatched = true;
      pushEvent('scroll_50', {
        scroll_depth_threshold: 50,
        page_path: window.location.pathname,
      });
    }

    if (scrollPercent >= 90 && !scroll90Dispatched) {
      scroll90Dispatched = true;
      pushEvent('scroll_90', {
        scroll_depth_threshold: 90,
        page_path: window.location.pathname,
      });
    }
  }, { passive: true });
}

/**
 * Inicializador dos listeners da página
 */
export function initTracking() {
  // Dispara page_view inicial
  pushEvent('page_view', {
    page_path: window.location.pathname,
    page_title: document.title,
  });

  // Ativa listeners de scroll
  initScrollTracking();

  // Anexa listeners automáticos em elementos com data-track-cta
  document.querySelectorAll('[data-track-cta]').forEach((element) => {
    element.addEventListener('click', () => {
      const location = element.getAttribute('data-track-location') || 'general';
      const label = element.getAttribute('data-track-label') || element.textContent.trim();
      const destination = element.getAttribute('data-track-dest') || 'whatsapp';
      trackCtaClick({ location, label, destination });
    });
  });

  // Listeners para cliques em telefone (phone_click)
  document.querySelectorAll('a[href^="tel:"]').forEach((element) => {
    element.addEventListener('click', () => {
      pushEvent('phone_click', {
        phone_number: element.getAttribute('href').replace('tel:', ''),
        click_location: element.getAttribute('data-track-location') || 'footer',
      });
    });
  });
}
