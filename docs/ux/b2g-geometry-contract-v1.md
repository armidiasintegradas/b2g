# B2G — Geometry Contract V1 (Mapeamento Geométrico 1440px)

**Versão:** 1.0 — Fidelity Recovery Hard Reset  
**Fonte Primária:** `references/stitch-originals/desktop/b2g-master-v1.2-desktop-final.png` (360 × 1476 px)  
**Fator de Escala:** 4.0× (Desktop Canvas: 1440 × 5904 px)  
**Autoridade:** Em conformidade com a diretriz do Hard Reset, este documento especifica os limites geométricos de cada seção e componente da landing page.

---

## 1. Mapeamento Geral de Dobras e Seções (1440 × 5904 px)

| ID | Seção | Coordenadas 360px Master | Coordenadas 1440px Desktop | Altura Relativa | Background Dominante |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **HEADER** | `(0, 0, 360, 20)` | `(0, 0, 1440, 80)` | 80 px | `#080b11` (Dark Glass / Sticky) |
| **02** | **HERO** | `(0, 20, 360, 230)` | `(0, 80, 1440, 920)` | 920 px | `#080b11` + Doctor BG Blend |
| **03** | **SOLUÇÕES** | `(0, 250, 360, 330)` | `(0, 1000, 1440, 1320)` | 1320 px | `#f8fafc` (Off-white Editorial) |
| **04** | **SISTEMA DE AQUISIÇÃO** | `(0, 580, 360, 230)` | `(0, 2320, 1440, 920)` | 920 px | `#0d121c` (Surface Alt) |
| **05** | **PERFORMANCE** | `(0, 810, 360, 310)` | `(0, 3240, 1440, 1240)` | 1240 px | `#080b11` (Canvas) |
| **06** | **CTA FINAL** | `(0, 1120, 360, 260)` | `(0, 4480, 1440, 1040)` | 1040 px | `#080b11` + Radial Cyan Glow |
| **07** | **FOOTER** | `(0, 1380, 360, 96)` | `(0, 5520, 1440, 384)` | 384 px | `#06080d` (Dark Baseline) |
| **TOTAL**| **CANVAS COMPLETO** | `(0, 0, 360, 1476)` | `(0, 0, 1440, 5904)` | **5904 px** | — |

---

## 2. Contrato de Layout e Containers

- **Largura Máxima do Container Principal:** `1200px`
- **Padding Lateral Padrão:** `24px` em desktop (área útil de conteúdo = 1152px)
- **Alinhamento do Container:** Centralizado horizontalmente (`margin: 0 auto`)

---

## 3. Especificação Geométrica por Seção

### 3.1 Header (01)
- **Altura de Linha:** `80px` (fixa com `backdrop-filter: blur(12px)`)
- **Logo B2G:** Alinhamento à esquerda, altura canônica de renderização `24px`
- **Wrappers Artificiais:** Estritamente proibidos (sem fundo branco, sem border-radius, sem padding artificial)
- **Navegação:** Centralizada / à direita com espaçamento de `32px` entre links
- **CTA do Header:** Botão pill `btn-header` com `9px 20px`, `13px` font-size

### 3.2 Hero (02)
- **Padding Top:** `140px` (compensando navbar fixa de 80px + respiro)
- **Coluna de Conteúdo (Texto):** Largura máxima de `680px`, alinhada à esquerda
- **Mídia Hero (`hero-doctor-bg.webp`):** Posicionamento à direita com `object-position: right 30%`, `opacity: 0.42`, com gradiente contínuo de fade para a esquerda (`#080b11` total em x < 40%)
- **Pilares Inferiores:** Grid horizontal de 3 colunas, borda superior sutil `1px solid var(--border-default)`, padding vertical `24px`

### 3.3 Soluções (03) — Composição Editorial Clara
- **Fundo:** `#f8fafc` (off-white contrastante com o restante do site)
- **Kicker & Título:** Topo à esquerda com cor escura (`#0f172a`), kicker com dot `#00b2d8`
- **Estrutura:** Lista editorial vertical com 4 linhas (sem grid 4 cards SaaS escuros)
- **Divisores:** `1px solid #e2e8f0` entre cada linha
- **Itens:**
  - `01 Tráfego Pago` + Tags
  - `02 Tracking & Dados` + Tags
  - `03 Conteúdo & Autoridade` + Tags
  - `04 Landing Pages` + Tags
- **Numeração:** Tipografia `28px 700`, cor `#64748b`

### 3.4 Sistema de Aquisição (04)
- **Estrutura:** Grid horizontal de 5 estágios conectados por uma linha contínua
- **Linha Conectora:** Fio sutil `rgba(255, 255, 255, 0.12)` na altura `top: 18px`
- **Marcadores:** Círculos perfeitos de `36 × 36 px`, `border-radius: 50%`
- **Ponto Focal (03 Conversão):** Destaque em ciano `#00b2d8` com glow `rgba(0, 178, 216, 0.5)`
- **Eliminação de Caixas:** Sem fundos de card, sem bordas retangulares individuais
- **Ferramental & Competência:** Integrado diretamente ao fluxo após callout de governança

### 3.5 Performance (05)
- **Estrutura:** 5 colunas tipográficas com divisores verticais sutis `border-right: 1px solid var(--divider-line)`
- **Eliminação de Caixas:** Sem caixas `.metric-card-v12`
- **Destaque:** Métrica 05 (`Custo por Oportunidade`) destacada com texto ciano
- **Módulo de Governança:** Card executivo com botão de solicitação de apresentação técnica

### 3.6 CTA Final (06)
- **Estrutura:** Bloco centralizado com glow ciano radial difuso
- **Ação Principal:** Botão `btn-primary` com link canônico para o WhatsApp oficial

### 3.7 Footer (07)
- **Linha Superior:** Logo oficial à esquerda (sem wrappers artificiais) + links de navegação à direita
- **Linha Inferior:** Copyright oficial provisório (`© 2026 B2G Marketing Digital e Treinamentos.`)
- **Cláusulas CFM:** Ausência estrita de declarações jurídicas regulatórias não autorizadas
