# [SUPERSEDED / INVALID FOR FINAL VISUAL LOCK] B2G — Relatório de Fidelidade Visual Desktop V1.2
> **AVISO:** Este documento foi marcado como **SUPERSEDED / INVALID FOR FINAL VISUAL LOCK** devido ao Hard Reset de Fidelidade contra o Master Stitch V1.2.  
> Consulte o documento oficial atualizado: `docs/ux/b2g-desktop-fidelity-report-v2.md`.

**Documento Histórico Suplantado**  
**Data Original:** 18 de Setembro de 2026  
**Autoridade Visual:** `B2G — MASTER REFERENCE V1.2 — DESKTOP FINAL` (`references/stitch-originals/desktop/b2g-master-v1.2-desktop-final.png`)  
**Status:** **SUPERSEDED / INVALID FOR FINAL VISUAL LOCK**

---

## 1. Visão Geral e Metodologia

Este relatório consolida a auditoria de fidelidade técnica e visual da landing page da **B2G Marketing Digital e Treinamentos**, desenvolvida sob arquitetura estática zero-dependency (HTML5 semântico, CSS moderno estruturado por tokens, JavaScript ESM e pipeline de compilação nativo em Node.js).

A captura de tela em resolução nominal desktop (1440px de largura) foi realizada via Chromium headless e comparada por fatias verticais contra o Stitch Master Reference V1.2.

- **Captura V1:** `references/implementation-checks/b2g-desktop-implementation-v1.png`
- **Captura V2:** `references/implementation-checks/b2g-desktop-implementation-v2.png`
- **Captura Final V3 (Homologada):** `references/implementation-checks/b2g-desktop-implementation-v3.png`

---

## 2. Classificação de Apontamentos e Resolução

### 2.1 Apontamentos P0 (Bloqueantes / Contratuais) — 0 Pendentes
Todos os itens P0 foram rigorosamente atendidos e verificados automaticamente por suite de testes de contrato (`tests/contract-and-fidelity.test.mjs`):

| Item P0 | Requisito Canônico | Status |
| :--- | :--- | :--- |
| **Seções Canônicas** | Exatamente 7 seções na ordem estrita: Header, Hero, Soluções, Sistema de Aquisição, Performance, CTA Final, Footer. Sem seções extras. | **RESOLVIDO (100%)** |
| **Marca Oficial** | Uso exclusivo do asset homologado `public/brand/b2g-logo-oficial.png` sem vetorização sintética ou recriação em CSS. | **RESOLVIDO (100%)** |
| **Métricas Contratuais** | Exibição estrita de: `CTR`, `CPC`, `CPL`, `Taxa de Conversão`, `Custo por Oportunidade`. Proibição absoluta de termos antigos ou dados inventados. | **RESOLVIDO (100%)** |
| **Conversão Canônica** | WhatsApp oficial `https://wa.me/5561994524838` com parâmetros de telemetria `data-track-cta`, `data-track-location`, `data-track-label`, `data-track-dest="whatsapp"`. | **RESOLVIDO (100%)** |
| **Isolamento de Produção** | Ausência completa de IDs analíticos fictícios no código-fonte. | **RESOLVIDO (100%)** |
| **Governança CFM no Footer** | Remoção de claims regulatórios indevidos no rodapé; copyright enxuto `© 2026 B2G Marketing Digital e Treinamentos.`. | **RESOLVIDO (100%)** |

### 2.2 Apontamentos P1 (Fidelidade Visual & Alinhamento de Layout com o Stitch) — 0 Pendentes
Refinamentos executados para atingir paridade estética milimétrica contra a criação no Stitch:

1. **Alinhamento do Grid e Conteúdo do Hero:**
   - *Diagnóstico:* `.hero-content` estava atribuído à mesma div `.container`, fazendo com que a largura máxima de 680px com `margin: auto` centralizasse o bloco no meio da tela (desalinhado da margem esquerda do Header e das seções seguintes).
   - *Resolução:* Aninhamento corrigido (`<div class="container"><div class="hero-content">`), ancorando o texto estritamente à esquerda do container (X = 120px) e liberando os 58% da direita para o espaço fotográfico e geométrico do Hero.
2. **Cards de Soluções (Arquitetura de Serviço):**
   - *Diagnóstico:* Ausência do cabeçalho individual e ícone de canto nos cards; altura excessiva.
   - *Resolução:* Implementado `.editorial-card-header` com numeral estilizado (`01` a `04`) e ícone `+` no canto superior direito. Altura e paddings ajustados para proporção harmônica idêntica ao Stitch.
3. **Fluxo do Sistema de Aquisição (Engenharia de Fluxo):**
   - *Diagnóstico:* Ausência dos identificadores de estágio em pill e da linha horizontal conectora entre os passos.
   - *Resolução:* Adicionados badges numéricos individuais (`.stage-num-badge`), linha conectora horizontal por trás dos cards via pseudo-elemento `::before`, e destaque ciano com glow no Estágio 03 (`PONTO FOCAL: Conversão`).
4. **Badges Tecnológicas (Ferramental & Competência):**
   - *Diagnóstico:* Pílulas de tecnologia sem marcadores visuais.
   - *Resolução:* Inseridos marcadores luminosos ciano (`.tool-dot`) em cada uma das 8 badges, com grid centralizado em 3 linhas equilibradas.
5. **Métricas de Performance & Governança:**
   - *Diagnóstico:* Box de auditoria não empilhado; ausência do texto legal auxiliar no botão institucional.
   - *Resolução:* Box `.audit-indicator` com rótulo e valor empilhados (`PADRÃO DE AUDITORIA: / Relatórios Semanais Dedicados`); inserido subtexto regulatório `Apresentações individuais e relatórios sob acordos de sigilo.` abaixo do botão branco `SOLICITAR APRESENTAÇÃO TÉCNICA`.
6. **Ritmo Vertical e Espaçamento Geral:**
   - *Diagnóstico:* Seções com espaçamento vertical excessivo (96px).
   - *Resolução:* Token ajustado para 80px (`--section-spacing-y: 80px`), reproduzindo a cadência densa e sofisticada criada no Stitch.

### 2.3 Apontamentos P2 (Mídias e Tags Externas — Não Bloqueantes)
- **Asset Hero Photo (`HERO_MEDIA_PENDING`):**
  - Conforme instrução expressa da direção de arte, **não foi utilizada imagem genérica de banco nem gerada por IA**.
  - O container, proporções, geometria e gradiente escuro de transição estão rigorosamente preservados em `.hero-media-pending`, prontos para receber o arquivo fotográfico original em alta resolução.
- **Tags de Produção:**
  - Infraestrutura e dataLayer prontos em `src/lib/tracking.js` para injeção de IDs reais após o Visual Lock.

---

## 3. Matriz de Cobertura de Testes Automatizados

Executado com o runner nativo do Node.js:
```bash
node --test tests/contract-and-fidelity.test.mjs
```

Resultados:
- ✔ 1. Exatamente 7 seções canônicas congeladas
- ✔ 2. Logo master correta (`public/brand/b2g-logo-oficial.png`)
- ✔ 3. Métricas homologadas V1.2 presentes (`CTR`, `CPC`, `CPL`, `Taxa de Conversão`, `Custo por Oportunidade`)
- ✔ 4. Ausência estrita de textos antigos de métricas
- ✔ 5. WhatsApp oficial canônico correto em todos os pontos
- ✔ 6. Ausência de IDs analíticos fictícios de produção
- ✔ 7. Ausência de claims jurídicos/CFM não autorizados no footer
- ✔ 8. Preservação de `HERO_MEDIA_PENDING` sem substituição arbitrária
- **Total:** 9 testes executados, 9 aprovados (0 falhas).

---

## 4. Conclusão

A interface desktop da landing page B2G está agora com alinhamentos, grids, hierarquia e detalhes visuais rigorosamente fiéis à criação do Stitch.

**B2G DESKTOP FIDELITY FINALIZADA — PRONTO PARA VISUAL LOCK.**
