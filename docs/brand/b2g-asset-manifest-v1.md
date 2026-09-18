# B2G — Manifesto de Assets Canônicos V1.2
**Data de Atualização:** 2026-09-18  
**Status:** ASSETS ATUALIZADOS — MENU LOGO HOMOLOGADO / FAVICONS GERADOS / HERO LOCKED

Este manifesto registra a identidade técnica e integridade criptográfica (SHA-256) dos arquivos originais e seu status de homologação.

---

## 1. Logo do Menu (Header Navbar) — Homologada

| Atributo | Especificação Canônica |
| :--- | :--- |
| **Path no Projeto** | `public/brand/b2g-logo-menu.png` |
| **Source Original Fornecido** | `media_1789775438266.png` |
| **Dimensões** | `1024 × 365 px` |
| **Formato** | PNG RGBA (vetor branco puro com transparência) |
| **Tamanho** | 34.260 bytes |
| **SHA-256** | `b0aeae4a0240ff820e2502d44a0dbbb15b9f0d9f564f4aa38269e0b08f238595` |
| **Status** | **HOMOLOGADO E INTEGRADO NO MENU/HEADER** |
| **Uso no Layout** | Header navbar com fundo escuro (`height: 26px; width: 73px; object-fit: contain;`) |

---

## 2. Favicons da Marca — Homologados

Gerados a partir do asset vetorial branco canônico:

| Asset | Dimensões | Formato | Path |
| :--- | :--- | :--- | :--- |
| **Favicon 16x16** | 16 × 16 px | PNG RGBA | `public/brand/favicon-16x16.png` |
| **Favicon 32x32** | 32 × 32 px | PNG RGBA | `public/brand/favicon-32x32.png` |
| **Apple Touch Icon** | 180 × 180 px | PNG RGBA (dark theme `#080b11`) | `public/brand/apple-touch-icon.png` |
| **Multi-size ICO** | 16, 32, 48 px | ICO | `public/brand/favicon.ico` e `/favicon.ico` |

---

## 3. Logo Master Institucional (Open Graph)

| Atributo | Alvo Requerido pelo Cliente | Asset Atual no Ambiente |
| :--- | :--- | :--- |
| **Dimensões Obrigatórias** | `2048 × 682 px` | `2172 × 724 px` |
| **SHA-256 Obrigatório** | `5838127cd2ca9528b31d671d49c1d072ae2b336fe22bc1bc0ad4b590914f0d8c` | `ff9e102e6216d68122496f64097120521fd1b99f9b879118ac661d836062dd8d` |
| **Status do Portão** | **STOP / LOGO_GATE = FAIL** | Fallback provisório ativo |
| **Localização Física** | Não localizado no disco local | `public/brand/b2g-logo-oficial.png` |
| **Regra Visual Homologada** | Sem wrappers (fundo, borda, padding, filter, invert, grayscale removidos) | Imagem renderizada limpa (`height: 24px`, `width: auto`, `object-fit: contain`) |

> **Registro de Auditoria:** Uma busca exaustiva em todo o sistema de arquivos local (`/Users/alexribeiro/`, incluindo diretórios de uploads e buffers) confirmou que nenhum arquivo possui o hash `5838127cd2ca9528b31d671d49c1d072ae2b336fe22bc1bc0ad4b590914f0d8c` ou dimensões `2048 × 682 px`. O arquivo não foi transmitido fisicamente na mensagem do chat. Por exigência estrita da regra de homologação, o portão da logo é classificado como **LOGO_GATE = FAIL** até que o arquivo físico seja transferido.

---

## 2. Fotografia Hero Stitch

| Atributo | Especificação Canônica |
| :--- | :--- |
| **Path Original no Projeto** | `public/media/hero-doctor-original.png` |
| **Source Original** | `/Users/alexribeiro/.gemini/antigravity/brain/0a766232-6e8a-4756-811c-a4c1423e14f0/.user_uploaded/media_1789759315841.png` |
| **Dimensões Originais** | 1024 × 571 px |
| **Tamanho Originais** | 888.039 bytes |
| **MIME Type** | `image/png` |
| **SHA-256 Original** | `5890d9e1902239814f4e1b91b8d6a3e52beba241fccb55f3a8163685770b42ad` |
| **Web Path Otimizado** | `public/media/hero-doctor-bg.webp` |
| **Dimensões Web** | 1024 × 571 px |
| **Tamanho Web** | 51.232 bytes |
| **SHA-256 Web** | `dd70155e32b0bd7015db2b4593bcb1ef9a95ef6bb71b68000240326156fe5669` |
| **Status** | **HOMOLOGADO E INTEGRADO** |
