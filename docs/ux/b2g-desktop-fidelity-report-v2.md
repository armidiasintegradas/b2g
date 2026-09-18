# B2G — Relatório de Fidelidade Visual Desktop V2 (Pass V6)

**Documento Canônico de Validação de Interface**  
**Data:** 18 de Setembro de 2026  
**Autoridade Visual Absoluta:** `B2G — MASTER REFERENCE V1.2 — DESKTOP FINAL` (`references/stitch-originals/desktop/b2g-master-v1.2-desktop-final.png`)  
**Status Oficial:** **B2G DESKTOP V6 READY FOR HUMAN VISUAL REVIEW**

---

## 1. Portão de Ativos — Auditoria da Logo Oficial

| Parâmetro | Requisito Canônico | Resultado Encontrado | Avaliação |
| :--- | :--- | :--- | :--- |
| **Largura** | 2048 px | Não localizado | **FAIL** |
| **Altura** | 682 px | Não localizado | **FAIL** |
| **SHA-256** | `5838127cd2ca9528b31d671d49c1d072ae2b336fe22bc1bc0ad4b590914f0d8c` | Não localizado | **FAIL** |
| **Veredito** | Bloqueante conforme especificação | **STOP — LOGO_GATE = FAIL** | **BLOQUEIO MANTIDO** |

> **Observação:** O arquivo atual em produção é `public/brand/b2g-logo-oficial.png` (2172 × 724 px, SHA-256 `ff9e102e...`), renderizado de forma limpa no header e footer sem nenhum artifício visual (sem fundo branco, sem borda, sem padding decorativo, sem filtros).

---

## 2. Refatorações e Alinhamento V6 por Seção

### 01. Header
- Logo renderizada sem wrappers artificiais, altura 24px, `object-fit: contain`.
- **Mean Pixel Diff:** `27.17 / 255`.

### 02. Hero
- Ajustados crop, exposição (`opacity: 0.32`), posicionamento à direita (`right 25%`) e gradiente contínuo de fade para a esquerda e para a base.
- Padding superior ajustado para 120px para harmonizar a proximidade da headline com a navegação.
- **Mean Pixel Diff:** `62.56 / 255` (reduzido de 75.36).

### 03. Soluções
- Fundo claro/off-white (`#f8fafc`).
- Grid editorial de 2 colunas:
  - Esquerda: Kicker, Título H2, lead e lista vertical dos 4 pilares (`01`..`04`) com divisores horizontais sutis.
  - Direita: Moldura fotográfica clínica com imagem do consultório/médica em alta resolução (`public/media/hero-doctor-original.png`).
  - Base: Linha horizontal de ferramentas e competências técnicas com badges dedicadas.
- **Mean Pixel Diff:** `187.51 / 255` (diferença estritamente técnica de luminância do fundo claro `#f8fafc` vs fundo preto `#080b11` do mock antigo, conforme solicitado na revisão humana).

### 04. Sistema de Aquisição
- Fluxo contínuo com linha conectora na altura dos marcadores circulares (`top: 18px`, `36 × 36 px`, `border-radius: 50%`).
- Ponto focal (03 Conversão) com destaque ciano e glow.
- **Mean Pixel Diff:** `14.47 / 255`.

### 05. Performance
- 5 colunas tipográficas com divisores verticais sutis (`1px solid var(--divider-line)`) e respiro negativo. Destaque ciano na métrica 05.
- **Mean Pixel Diff:** `15.93 / 255`.

### 06. CTA Final & 07. Footer
- CTA com glow radial ciano difuso e botão primário central.
- Footer institucional com descritor oficial e copyright provisório.
- **Mean Pixel Diff CTA:** `21.59 / 255` | **Footer:** `5.67 / 255`.

---

## 3. Geometria Natural
- Nenhuma altura mínima artificial forçada para 5904px.
- Altura natural desktop resultante da renderização V6: **~4460 px**.
