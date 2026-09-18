# B2G — Plano de Mensuração & Arquitetura de Tracking

**Versão:** 1.0 — Architecture Baseline  
**Autoridade:** Documental = GitHub | Código = Antigravity  
**Status dos Identificadores de Produção:** PENDENTES (Configuração via Variáveis de Ambiente / GTM Container)  
**Canal Oficial de Atendimento WhatsApp:** `https://wa.me/5561994524838`

---

## 1. Visão Geral da Arquitetura

O ecossistema de tracking da B2G é projetado com governança rígida, suporte a *Server-Side Tracking* (GTM SS) e conformidade integral com LGPD e diretrizes éticas de privacidade em saúde:

```
[Visitante / Navegador]
       │
       ▼ (dataLayer / Custom Events)
[Google Tag Manager Client-Side]
       │
       ├──► [Google Analytics 4]
       ├──► [Google Ads Enhanced Conversions]
       ├──► [Meta Pixel / Conversions API via GTM Server-Side]
       └──► [WhatsApp Conversion Pipeline]
```

> **Aviso de Integridade:** Nenhum ID fictício de produção (ex: `G-XXXXXX`, `GTM-XXXXXX`, `AW-XXXXXX`, `PIXEL-ID`) deve ser inserido em código estático ou no repositório. As variáveis devem ser injetadas exclusivamente via `.env` / runtime ou no painel do container GTM.

---

## 2. Plataformas e Ferramentas Integradas

### 2.1 Google Tag Manager (GTM)
- Gerenciamento centralizado de tags sem necessidade de deploy contínuo em código.
- Injeção de script canônico no `<head>` e `<noscript>` no `<body>` via variável de ambiente:
  - `NEXT_PUBLIC_GTM_ID` ou `VITE_GTM_ID` (aguardando ID homologado do cliente).

### 2.2 Google Analytics 4 (GA4)
- Coleta baseada em eventos via dataLayer estruturado.
- Suporte a medição otimizada e dimensões personalizadas de campanha (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`).

### 2.3 Google Ads Conversion Tracking
- Rastreamento de conversão primária (`purchase` / `lead`) disparado na intenção de contato e clique qualificado no WhatsApp.
- Preparação para *Enhanced Conversions* via hash SHA-256 quando houver formulário.

### 2.4 Meta Pixel & Meta Conversions API (CAPI)
- Disparo duplo de eventos com chave única de desduplicação (`event_id`).
- Eventos padrão mapeados: `PageView`, `Contact`, `Lead`.

### 2.5 UTMs & Higiene de Parâmetros
Todos os links de entrada e saída devem preservar parâmetros de atribuição:
- `utm_source`: Origem da mídia (ex: `google`, `instagram`, `facebook`, `meta`)
- `utm_medium`: Meio (ex: `cpc`, `stories`, `feed`, `bio`)
- `utm_campaign`: Nome da campanha médica estruturada
- `utm_content`: Anúncio / criativo específico
- `utm_term`: Termo de pesquisa (Google Search)

---

## 3. Matriz de Eventos Canônicos

| Evento dataLayer | Gatilho / Trigger | Parâmetros Obrigatórios | Plataformas Destino |
| :--- | :--- | :--- | :--- |
| `page_view` | Carregamento da página | `page_path`, `page_title`, `referrer` | GA4, Meta Pixel |
| `cta_click` | Clique em qualquer botão CTA principal | `cta_location` (`header`, `hero`, `body`, `footer`), `cta_text`, `destination_url` | GA4, Google Ads |
| `whatsapp_click` | Clique em link/botão para o WhatsApp oficial | `whatsapp_number`, `click_location`, `origin_section`, `prefilled_message` | GA4, Google Ads, Meta (Lead/Contact) |
| `form_start` | Primeiro foco/interação em campo de formulário | `form_id`, `form_name` | GA4 |
| `form_submit` | Envio validado com sucesso de formulário | `form_id`, `form_name`, `lead_type` | GA4, Google Ads (Conversion), Meta (Lead) |
| `phone_click` | Clique em links do tipo `tel:` | `phone_number`, `click_location` | GA4 |
| `scroll_50` | Rolagem atingindo 50% da altura da página | `scroll_depth_threshold: 50`, `page_path` | GA4 |
| `scroll_90` | Rolagem atingindo 90% da altura da página | `scroll_depth_threshold: 90`, `page_path` | GA4 |

---

## 4. Pipeline de Conversão WhatsApp

O canal prioritário de conversão da landing page é o WhatsApp oficial:
- **URL Base:** `https://wa.me/5561994524838`
- **Formato com Mensagem Pré-Preenchida:**
  `https://wa.me/5561994524838?text=Ol%C3%A1%2C%20gostaria%20de%20estruturar%20a%20aquisi%C3%A7%C3%A3o%20de%20pacientes%20da%20minha%20cl%C3%ADnica.`

### Regra Técnica de Disparo de Conversão:
Ao clicar em qualquer ponto de conversão WhatsApp:
1. Disparar evento síncrono no `window.dataLayer`:
   ```javascript
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({
     event: 'whatsapp_click',
     click_location: 'hero_cta', // ou 'header_cta', 'final_cta', 'footer'
     whatsapp_number: '5561994524838',
     event_id: 'wa_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
   });
   ```
2. Garantir pequeno delay técnico (150ms) ou abertura em nova aba (`target="_blank" rel="noopener noreferrer"`) para assegurar o envio completo do beacon analítico antes do redirecionamento.
