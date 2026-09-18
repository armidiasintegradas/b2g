import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

test('B2G Contract & Fidelity Test Suite', async (t) => {
  const indexPath = resolve(rootDir, 'index.html');
  assert.ok(existsSync(indexPath), 'index.html deve existir na raiz do projeto');
  const html = readFileSync(indexPath, 'utf-8');

  await t.test('1. Exatamente 7 seções canônicas congeladas', () => {
    // 1. Header
    assert.match(html, /<header[^>]*class="[^"]*site-header/i, 'Deve conter a seção HEADER');
    // 2. Hero
    assert.match(html, /<section[^>]*id="hero"/i, 'Deve conter a seção HERO');
    // 3. Soluções
    assert.match(html, /<section[^>]*id="solucoes"/i, 'Deve conter a seção SOLUÇÕES');
    // 4. Sistema de Aquisição
    assert.match(html, /<section[^>]*id="como-funciona"/i, 'Deve conter a seção SISTEMA DE AQUISIÇÃO');
    // 5. Performance
    assert.match(html, /<section[^>]*id="resultados"/i, 'Deve conter a seção PERFORMANCE');
    // 6. CTA Final
    assert.match(html, /<section[^>]*id="contato"/i, 'Deve conter a seção CTA FINAL');
    // 7. Footer
    assert.match(html, /<footer[^>]*class="[^"]*site-footer/i, 'Deve conter a seção FOOTER');

    // Asserção de que não há seções adicionais não autorizadas no main
    const mainMatches = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    assert.ok(mainMatches, 'Elemento <main> deve existir');
    const mainContent = mainMatches[1];
    const sectionsCount = (mainContent.match(/<section/gi) || []).length;
    assert.strictEqual(sectionsCount, 5, 'Deve conter exatamente 5 seções filhas dentro do <main> (+ 1 header + 1 footer = 7 seções no total)');
  });

  await t.test('2. Logo master correta com validação de SHA-256', () => {
    assert.match(html, /public\/brand\/b2g-logo-oficial\.png/, 'Deve referenciar o master oficial b2g-logo-oficial.png');
    const logoPath = resolve(rootDir, 'public/brand/b2g-logo-oficial.png');
    assert.ok(existsSync(logoPath), 'Arquivo b2g-logo-oficial.png deve existir fisicamente');
    const logoHash = createHash('sha256').update(readFileSync(logoPath)).digest('hex');
    assert.strictEqual(logoHash, 'ff9e102e6216d68122496f64097120521fd1b99f9b879118ac661d836062dd8d', 'SHA-256 da logo canônica deve corresponder ao master original homologado');
  });

  await t.test('3. Métricas homologadas V1.2 presentes', () => {
    assert.match(html, />CTR<\/div>/, 'Deve conter métrica CTR');
    assert.match(html, />CPC<\/div>/, 'Deve conter métrica CPC');
    assert.match(html, />CPL<\/div>/, 'Deve conter métrica CPL');
    assert.match(html, />Taxa de Conversão<\/div>/, 'Deve conter métrica Taxa de Conversão');
    assert.match(html, />Custo por Oportunidade<\/div>/, 'Deve conter métrica Custo por Oportunidade');
  });

  await t.test('4. Ausência estrita de textos antigos de métricas', () => {
    assert.doesNotMatch(html, /CPL Qualificado/i, 'NÃO deve conter "CPL Qualificado" (antigo)');
    assert.doesNotMatch(html, /Volume no Privado/i, 'NÃO deve conter "Volume no Privado" (antigo)');
    assert.doesNotMatch(html, /Taxa de Presença/i, 'NÃO deve conter "Taxa de Presença" (antigo)');
    assert.doesNotMatch(html, /ROAS & Governança/i, 'NÃO deve conter "ROAS & Governança" (antigo)');
  });

  await t.test('5. WhatsApp oficial canônico correto em todos os pontos', () => {
    const waRegex = /https:\/\/wa\.me\/5561994524838/g;
    const matches = html.match(waRegex);
    assert.ok(matches && matches.length >= 3, 'Deve haver múltiplos links apontando para o WhatsApp oficial canônico');
    assert.doesNotMatch(html, /wa\.me\/(?!5561994524838)/, 'Nenhum outro número de WhatsApp deve estar presente');
  });

  await t.test('6. Ausência de IDs analíticos fictícios de produção', () => {
    assert.doesNotMatch(html, /GTM-[A-Z0-9]{4,}/, 'Não deve conter ID fictício de GTM');
    assert.doesNotMatch(html, /G-[A-Z0-9]{6,}/, 'Não deve conter ID fictício de GA4');
    assert.doesNotMatch(html, /AW-[0-9]{8,}/, 'Não deve conter ID fictício de Google Ads');
  });

  await t.test('7. Ausência de claims jurídicos/CFM não autorizados no footer', () => {
    assert.doesNotMatch(html, /Manual de Publicidade Médica/i, 'Não deve conter declaração regulatória não autorizada no footer');
    assert.doesNotMatch(html, /Conselho Federal de Medicina \(CFM\)\.<\/p>/i, 'Não deve conter claim de conformidade CFM no rodapé');
    assert.match(html, /&copy; 2026 B2G Marketing Digital e Treinamentos\./, 'Deve conter copyright provisório conforme regra');
  });

  await t.test('8. Fotografia do Hero canônica integrada (public/media/hero-doctor-bg.webp)', () => {
    assert.match(html, /public\/media\/hero-doctor-bg\.webp/, 'Deve referenciar o asset hero-doctor-bg.webp no Hero');
    assert.doesNotMatch(html, /hero-media-pending/, 'NÃO deve conter estado pendente hero-media-pending');
    const heroWebpPath = resolve(rootDir, 'public/media/hero-doctor-bg.webp');
    assert.ok(existsSync(heroWebpPath), 'Arquivo hero-doctor-bg.webp deve existir fisicamente');
    const heroOrigPath = resolve(rootDir, 'public/media/hero-doctor-original.png');
    assert.ok(existsSync(heroOrigPath), 'Arquivo hero-doctor-original.png deve existir fisicamente');
    const heroOrigHash = createHash('sha256').update(readFileSync(heroOrigPath)).digest('hex');
    assert.strictEqual(heroOrigHash, '5890d9e1902239814f4e1b91b8d6a3e52beba241fccb55f3a8163685770b42ad', 'SHA-256 do original do hero deve corresponder ao asset master fornecido');
  });

  await t.test('9. Ausência estrita de claims excessivos (Final Copy Lock V1.2)', () => {
    assert.doesNotMatch(html, /Autoridade Garantida/i, 'NÃO deve conter claim "Autoridade Garantida"');
    assert.doesNotMatch(html, /Fast Load <1s/i, 'NÃO deve conter claim "Fast Load <1s"');
    assert.doesNotMatch(html, /modelo proprietário/i, 'NÃO deve conter claim de "modelo proprietário"');
    assert.doesNotMatch(html, /garantir que cada centavo/i, 'NÃO deve conter claim "garantir que cada centavo"');
    assert.doesNotMatch(html, /Métricas Reais &amp; Governança de Performance/i, 'NÃO deve conter headline antiga de métricas');
    assert.doesNotMatch(html, /Prestação Auditada \/ Ética Médica/i, 'NÃO deve conter badge antiga "Prestação Auditada / Ética Médica"');
  });

  await t.test('10. Presença de copy homologada (Final Copy Lock V1.2)', () => {
    assert.match(html, /O que acompanhamos para melhorar performance\./, 'Deve conter nova headline de performance');
    assert.match(html, /Indicadores que ajudam a entender eficiência de mídia, conversão e oportunidades de otimização\./, 'Deve conter nova subheadline de performance');
    assert.match(html, /Estrutura preparada para cases e resultados autorizados\./, 'Deve conter novo título de cases');
    assert.match(html, /A B2G conecta mídia, conversão e mensuração para criar uma operação de aquisição mais clara, integrada e orientada por dados\./, 'Deve conter novo texto de governança/conexão');
    assert.match(html, /<span class="[^"]*editorial-tag[^"]*">Posicionamento<\/span>/, 'Deve conter tag "Posicionamento"');
    assert.match(html, /<span class="[^"]*editorial-tag[^"]*">Performance Web<\/span>/, 'Deve conter tag "Performance Web"');
    assert.match(html, /Mensuração &amp; Relatórios/, 'Deve conter badge "Mensuração & Relatórios"');
  });
});
