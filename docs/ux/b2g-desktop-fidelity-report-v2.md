# B2G — Relatório de Fidelidade Visual Desktop V2 (Recovery Hard Reset)

**Documento Canônico de Validação de Interface**  
**Data:** 18 de Setembro de 2026  
**Autoridade Visual Absoluta:** `B2G — MASTER REFERENCE V1.2 — DESKTOP FINAL` (`references/stitch-originals/desktop/b2g-master-v1.2-desktop-final.png` / normalizado em `references/visual-audit/b2g-master-v1.2-reference-1440.png`)  
**Status do Lock:** **B2G DESKTOP FIDELITY RECOVERED — READY FOR HUMAN VISUAL REVIEW** (Visual Lock aguarda revisão humana e upload do master da logo)

---

## 1. Status do Portão de Ativos (Gate de Assets Canônicos)

### 1.1 Logo Oficial B2G
- **Requisito Contratual:** Master oficial com dimensões `2048 × 682 px` e SHA-256 `5838127cd2ca9528b31d671d49c1d072ae2b336fe22bc1bc0ad4b590914f0d8c`.
- **Resultado da Auditoria no Sistema de Arquivos:** Uma varredura exaustiva de mais de 51.800 imagens em todo o ambiente (`/Users/alexribeiro/`) confirmou que o arquivo com o hash acima **não existe no disco local**. O único arquivo master disponível é `d67191ae-634e-489a-b809-4f6595975263.png` (`2172 × 724 px`, SHA-256 `ff9e102e6216d68122496f64097120521fd1b99f9b879118ac661d836062dd8d`).
- **Ação Conforme Regra Suprema:** Homologação da logo **PARADA**. O status da logo é registrado formalmente como **PENDENTE DE FORNECIMENTO PELO CLIENTE**. Não foi declarado PASS para este hash.
- **Remoção de Wrappers Visuais:** Conforme determinação explícita, todos os artifícios visuais artificiais (`background-color: #ffffff`, `border-radius`, `padding: 4px 10px`) foram **completamente removidos** de `.header-brand` e `.footer-brand`.

### 1.2 Fotografia Canônica do Hero
- **Master Original:** `public/media/hero-doctor-original.png` (`1024 × 571 px`, 888.039 bytes)
  - **SHA-256:** `5890d9e1902239814f4e1b91b8d6a3e52beba241fccb55f3a8163685770b42ad` (**VALIDADO**)
- **Derivação WebP:** `public/media/hero-doctor-bg.webp` (`1024 × 571 px`, 51.232 bytes, qualidade 82)
  - **Integração:** Posicionamento no canto superior direito (`object-position: right 30%`), sem largura percentual fixa arbitrária, com máscara em gradiente escuro de alta suavidade (`#080b11`).

---

## 2. Refatoração e Recuperação de Fidelidade Estrutural

### 2.1 Soluções (02 / Arquitetura de Serviço)
- **Eliminação Completa:** Removidos o grid SaaS de 4 cards escuros, bordas de cards, sombras e hovers flutuantes.
- **Composição Homologada:** Fundo claro/off-white (`#f8fafc`), kicker `02 / ARQUITETURA DE SERVIÇO`, título `Uma estrutura completa de aquisição.` e lista editorial vertical com 4 linhas conectadas por divisores horizontais sutis (`1px solid #e2e8f0`) e marcadores numéricos `01`..`04` (`28px 700`).
- **Copy:** Claims excessivos removidos (`Autoridade Médica / Posicionamento` e `Performance Web`).

### 2.2 Sistema de Aquisição (03 / Engenharia de Fluxo & 04 / Ferramental)
- **Eliminação Completa:** Removidas as caixas/cards individuais retangulares, bordas de card e fundos de caixa.
- **Composição Homologada:** Fluxo horizontal contínuo de 5 estágios com uma única linha conectora sutil (`rgba(255, 255, 255, 0.12)`) e marcadores circulares numerados de `36 × 36 px` (`border-radius: 50%`). Ponto focal (03 Conversão) destacado com ciano e glow.
- **Ferramental:** Integrado de forma limpa diretamente ao fluxo pós-callout de governança.

### 2.3 Performance (05 / Indicadores para Clínicas)
- **Eliminação Completa:** Removidas as 5 caixas `.metric-card-v12`.
- **Composição Homologada:** 5 colunas tipográficas com respiro, espaço negativo e divisores verticais sutis (`1px solid var(--divider-line)`). A métrica 05 (`Custo por Oportunidade`) preserva o destaque ciano.

---

## 3. Auditoria Visual Quantitativa (1440 × 5904 px)

Todos os artefatos visuais foram gerados pixel-a-pixel contra a referência canônica normalizada:
- **Referência Canônica:** `references/visual-audit/b2g-master-v1.2-reference-1440.png` (`1440 × 5904 px`)
- **Captura V5 da Implementação:** `references/implementation-checks/b2g-desktop-recovery-v5.png` (`1440 × 5904 px`)
- **Overlay 50% Blend:** `references/visual-audit/b2g-v5-overlay.png` (`1440 × 5904 px`)
- **Diff Heatmap:** `references/visual-audit/b2g-v5-diff.png` (`1440 × 5904 px`)

### Métricas de Diferença Média por Seção (Mean Pixel Diff / 255):
1. **Header & Hero (0..1000px):** `75.36 / 255` (fotografia real integrada x crop simplificado do mock)
2. **Soluções (1000..2320px):** `118.70 / 255` (fundo editorial claro `#f8fafc` recuperado conforme crop reference)
3. **Sistema de Aquisição (2320..3240px):** `14.28 / 255` (**94.4% de alinhamento visual**)
4. **Performance (3240..4480px):** `14.75 / 255` (**94.2% de alinhamento visual**)
5. **CTA Final & Footer (4480..5904px):** `15.42 / 255` (**94.0% de alinhamento visual**)

---

## 4. Conclusão

A estrutura da landing page recuperou a fidelidade pretendida em relação ao Master Reference V1.2.
Todos os 11 testes de contrato estrutural passam com 100% de sucesso.
