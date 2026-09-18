/**
 * B2G — Zero-Dependency Static Build Script
 * Node.js v24 ESM native
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

console.log('[BUILD] Iniciando compilação da landing page B2G V1.2 Desktop...');

// 1. Garantir diretórios de distribuição
mkdirSync(resolve(rootDir, 'styles'), { recursive: true });
mkdirSync(resolve(rootDir, 'lib'), { recursive: true });

// 2. Copiar assets de estilos e scripts
cpSync(resolve(rootDir, 'src/styles'), resolve(rootDir, 'styles'), { recursive: true });
cpSync(resolve(rootDir, 'src/lib'), resolve(rootDir, 'lib'), { recursive: true });
console.log('[BUILD] Assets CSS e JS sincronizados com sucesso.');

// 3. Ler templates de seções e shell
const shell = readFileSync(resolve(rootDir, 'src/layout/shell.html'), 'utf-8');
const header = readFileSync(resolve(rootDir, 'src/sections/header.html'), 'utf-8');
const hero = readFileSync(resolve(rootDir, 'src/sections/hero.html'), 'utf-8');
const solucoes = readFileSync(resolve(rootDir, 'src/sections/solucoes.html'), 'utf-8');
const sistemaAquisicao = readFileSync(resolve(rootDir, 'src/sections/sistema-aquisicao.html'), 'utf-8');
const performance = readFileSync(resolve(rootDir, 'src/sections/performance.html'), 'utf-8');
const ctaFinal = readFileSync(resolve(rootDir, 'src/sections/cta-final.html'), 'utf-8');
const footer = readFileSync(resolve(rootDir, 'src/sections/footer.html'), 'utf-8');

// 4. Montar página de produção index.html
const rendered = shell
  .replace('{{PAGE_TITLE}}', 'B2G — Marketing para Clínicas e Médicos Orientado a Aquisição')
  .replace('{{PAGE_DESCRIPTION}}', 'Tráfego pago, conteúdo, landing pages e mensuração trabalhando juntos para transformar presença digital em oportunidades reais para clínicas e médicos.')
  .replace('{{HEADER}}', header)
  .replace('{{HERO}}', hero)
  .replace('{{SOLUCOES}}', solucoes)
  .replace('{{SISTEMA_AQUISICAO}}', sistemaAquisicao)
  .replace('{{PERFORMANCE}}', performance)
  .replace('{{CTA_FINAL}}', ctaFinal)
  .replace('{{FOOTER}}', footer);

writeFileSync(resolve(rootDir, 'index.html'), rendered, 'utf-8');
console.log('[BUILD] index.html compilado com sucesso com as 7 seções canônicas congeladas.');
