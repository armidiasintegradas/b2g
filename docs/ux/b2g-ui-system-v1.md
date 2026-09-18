# B2G — UI System V1 (Design System Canônico)

**Versão:** 1.0 — Design Locked  
**Origem:** Extraído rigorosamente da referência homologada `B2G — MASTER REFERENCE V1.2 — DESKTOP FINAL` (`references/stitch-originals/desktop/b2g-master-v1.2-desktop-final.png`)  
**Autoridade:** Visual = Stitch | Documental = GitHub | Código = Antigravity

---

## 1. Paleta Cromática

A interface desktop homologada adota uma atmosfera escura de precisão cirúrgica (*clinical dark mode*), combinando superfícies em ardósia/azul-marinho profundo com acentos ciano elétrico e azul clínico, transmitindo autoridade, sofisticação e conformidade médica.

### 1.1 Cores de Fundo (Surfaces / Backgrounds)
- **Background Principal (Canvas/Page BG):** `#080B10` (Dark Navy Black)
- **Background de Seções Alternadas:** `#0A0E15` / `#0A0D14`
- **Superfície de Cards Primários:** `#0B1019`
- **Superfície de Cards com Destaque/Foco:** `#0D1522`
- **Superfície do Footer:** `#0A0D13`
- **Overlay de Imagem (Hero):** Gradiente linear escuro `linear-gradient(to right, rgba(8,11,16,0.92) 0%, rgba(8,11,16,0.65) 60%, rgba(8,11,16,0.40) 100%)` *(TO BE MEASURED FROM REFERENCE)*

### 1.2 Cores de Borda e Divisores (Borders & Dividers)
- **Borda de Cards Padrão:** `#1A2333` (ou `rgba(255, 255, 255, 0.08)`)
- **Borda de Cards Ativos/Destaque:** `#00B2D8` (ou `rgba(0, 178, 216, 0.40)`)
- **Linhas Divisórias Horizontais:** `#161F2E` (1px solid)

### 1.3 Cores de Destaque e Acentos (Accents & CTAs)
- **Ciano Primário (Cyan Glow / Primary CTA):** `#00B2D8` (variando para `#0099DA` em gradiente horizontal)
- **Ciano de Ênfase em Texto:** `#00B8E6` (utilizado na palavra-chave `"aquisição."` no Hero)
- **Azul Corporativo / Badges:** `#006699` / `#0B304A` (fundos sutis de tags)
- **Tag Text Color:** `#38BDF8` / `#00B8E6`

### 1.4 Cores Tipográficas (Text Hierarchy)
- **Texto Primário (Headings / Títulos de Alto Contraste):** `#FFFFFF`
- **Texto Secundário (Parágrafos / Subtítulos):** `#94A3B8` (Slate 400)
- **Texto Terciário / Metadados / Legendas:** `#64748B` (Slate 500)
- **Texto Desabilitado / Detalhes Sutis:** `#475569` (Slate 600)

---

## 2. Tipografia e Escala Tipográfica

A referência visual emprega uma família tipográfica grotesca contemporânea de geometria limpa, altamente legível e de aspecto executivo-hospitalar/tecnológico (inter, plus jakarta sans ou similar com kerning ajustado).

- **Família Tipográfica Primária:** Fonte sem serifa contemporânea (ex: Inter / Plus Jakarta Sans / Roboto)
- **Pesos Utilizados:**
  - `700` (Bold) — Headings principais e números de cards.
  - `600` (SemiBold) — Botões, títulos de seções e tags numéricas.
  - `500` (Medium) — Itens de menu, labels secundários, badges.
  - `400` (Regular) — Parágrafos descritivos e notas de rodapé.

### Escala Tipográfica Desktop *(Valores estimados da referência V1.2)*
| Nível | Uso | Tamanho Aproximado | Peso | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Título principal do Hero | 48px – 56px | Bold (700) | 1.15 | -0.02em |
| **Section H2** | Títulos das seções | 32px – 40px | Bold (700) | 1.2 | -0.015em |
| **Card H3** | Títulos dos cards e módulos | 20px – 24px | Bold (700) | 1.3 | -0.01em |
| **Lead / Subtitle** | Subtítulo do Hero e introduções | 18px – 20px | Regular (400) | 1.5 | normal |
| **Body** | Parágrafos descritivos dos cards | 14px – 15px | Regular (400) | 1.55 | normal |
| **Kicker / Overline**| Tags numéricas ("02 / ARQUITETURA DE SERVIÇO") | 12px – 13px | SemiBold (600) | 1.4 | 0.08em (caps) |
| **CTA / Buttons** | Rótulo dos botões | 14px – 15px | SemiBold (600) | 1.2 | 0.02em |
| **Legal / Footnote** | Termos CFM e notas de rodapé | 11px – 12px | Regular (400) | 1.45 | normal |

> *Valores exatos em pixels absolutos: TO BE MEASURED FROM REFERENCE durante a fase de implementação milimétrica.*

---

## 3. Grid, Largura Máxima, Gutters e Espaçamentos

- **Largura Máxima do Container (Max-Width):** 1200px a 1280px *(TO BE MEASURED FROM REFERENCE)*
- **Largura Total de Referência Desktop:** 1440px viewport base
- **Grid de Colunas:**
  - Seção Soluções: Grid de 4 colunas (`grid-cols-4`) ou 2x2 responsivo
  - Seção Sistema de Aquisição (Fluxo): Grid de 5 colunas sequenciais conectadas (`grid-cols-5`)
  - Seção Performance (Métricas): Grid de 4 colunas (`grid-cols-4`)
- **Gutters (Espaçamento entre colunas):** 20px a 24px *(TO BE MEASURED FROM REFERENCE)*
- **Padding Horizontal do Container:** 24px a 48px lateral
- **Espaçamento Vertical entre Seções (Section Padding Y):** 80px a 120px *(TO BE MEASURED FROM REFERENCE)*
- **Raio de Borda (Border Radius):**
  - Botões Primários / Pílulas: 6px a 8px (ou formato pill `rounded-full` em badges específicas) *(TO BE MEASURED FROM REFERENCE)*
  - Cards de Serviços e Métricas: 8px a 12px *(TO BE MEASURED FROM REFERENCE)*
  - Badges de Ferramentas / Tecnologias: 6px a 8px

---

## 4. Componentes de UI Homologados

### 4.1 Botões (Buttons)
1. **Botão Primário (Hero & CTA Final — "Quero estruturar minha aquisição ->" / "Falar com a B2G"):**
   - Background: Gradiente linear ou sólido `#00B2D8` -> `#0099DA`
   - Cor do texto: Branco puro `#FFFFFF`
   - Ícone: Seta para a direita `->` alinhada à direita
   - Padding interno: 14px vertical, 24px horizontal *(TO BE MEASURED FROM REFERENCE)*
   - Efeito hover: Brilho sutil (*glow*) e leve elevação de luminosidade.

2. **Botão Secundário / Ghost ("Conheça nossa estrutura v"):**
   - Background: Transparente com borda sutil ou sem borda (`text-white`)
   - Ícone: Chevron / seta para baixo `v`
   - Padding interno: Alinhado e harmonizado com o primário.

3. **Botão Header ("Falar com a B2G ->"):**
   - Estilo pílula / retangular compacto com preenchimento em ciano e tipografia reduzida (13px/14px).

4. **Botão Solicitar Apresentação Técnica ("SOLICITAR APRESENTAÇÃO TÉCNICA"):**
   - Botão retangular de alto contraste (branco com texto escuro ou borda rígida) no bloco de governança médica.

### 4.2 Links e Navegação
- Cor base: `#94A3B8`
- Cor hover: `#FFFFFF` com transição suave (150ms)
- Estilo: Sem sublinhado, tipografia refinada 14px.

### 4.3 Divisores e Linhas Estruturais
- Linhas finas de 1px (`#161F2E`) demarcando transições entre o fluxo de etapas e os blocos de credenciamento.

### 4.4 Cards e Módulos
- **Card de Serviço (Soluções):** Fundo `#0B1019`, borda fina `#1A2333`, numeração de estágio "01", "02", "03", "04", título em destaque e tags secundárias no rodapé do card.
- **Card de Fluxo (Engenharia de Fluxo):** Módulos verticais sequenciais numerados com indicação de estágio ("01", "02", "03 PONTO FOCAL", "04", "05") com conexões ou setas de fluxo.
- **Card de Métricas (Performance):** Métrica em caixa destacada com identificador ("MÉTRICA 01", etc.) e badge de qualificação inferior.

---

## 5. Backgrounds e Tratamento de Imagens

- **Hero Image:** Fotografia médica de alta qualidade (médica trabalhando com tablet em ambiente clínico sofisticado), com tratamento cromático frio e dessaturado, mesclando-se gradualmente com o fundo `#080B10` através de máscara/overlay degradê.
- **Textura de Fundo:** Gradiente radial sutil ou iluminação focal ciano em pontos estratégicos (atrás do Hero e do bloco CTA Final).

---

## 6. Comportamento do Header

- **Posicionamento:** Fixo no topo (`fixed top-0 left-0 w-full`) com backdrop blur (`backdrop-blur-md` com `rgba(8, 11, 16, 0.85)`).
- **Alinhamento:**
  - Esquerda: Logo oficial B2G
  - Centro/Direita: Links de navegação ancorados (Soluções, Como funciona, Resultados, Tecnologia, Contato)
  - Extrema Direita: Botão de ação direta `"Falar com a B2G ->"`
- **Borda Inferior:** Linha de 1px sutil (`rgba(255, 255, 255, 0.06)`).

---

## 7. Linguagem de Movimento (Motion Guidelines)

- **Princípio:** Movimentos sóbrios, precisos e não distrativos, condizentes com um ecossistema médico e empresarial.
- **Transições de Estado:** `duration-200 ease-out` para hovers de botões, links e cards.
- **Animações de Entrada:** Fade-in sutil com deslocamento vertical (`opacity: 0, y: 12px -> opacity: 1, y: 0`) acionado por interseção de scroll.
- **Respeito a Acessibilidade:** `prefers-reduced-motion` desativa transições desnecessárias.
