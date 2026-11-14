import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function noOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
}
async function accessible(page: Page) {
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual(
    [],
  );
}

for (const width of [1440, 768, 390, 320]) {
  test(`V2 complete simulation, drafts and annual cash flows at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quanto consumi in un anno?');
    await noOverflow(page);
    await accessible(page);
    await page.screenshot({ path: testInfo.outputPath('01-consumi.png'), fullPage: true });
    await page.getByRole('button', { name: 'Non ho dati annuali: aiutami a stimare' }).click();
    await page.locator('#consumo-periodo').fill('500');
    await page.locator('#spesa-periodo').fill('150');
    await page.locator('#mesi-periodo').selectOption('2');
    await accessible(page);
    await page.getByRole('button', { name: 'Usa la stima e controlla i dati →' }).click();
    await expect(page.locator('#consumo')).toHaveValue('3000');
    await expect(page.locator('#spesa')).toHaveValue('900');
    await expect(
      page.getByText('Dati annualizzati · da verificare', { exact: true }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Continua: configura l’impianto →' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
    await expect(page.locator('#regione')).toHaveValue('');
    await page.locator('#kwp').fill('4,5');
    await page.locator('#costo').fill('6.990');
    await page.getByRole('button', { name: 'Calcola la simulazione →' }).click();
    await expect(page.locator('#regione')).toBeFocused();
    await expect(page.locator('#regione-error')).toBeVisible();
    await page.locator('#regione').selectOption({ label: 'Lazio' });
    await page.locator('#orario-consumi').selectOption('evening');
    await page.locator('#batteria').selectOption('yes');
    await expect(page.locator('input[name="profilo"]:checked')).toHaveValue('0.4');
    await page.locator('#source-link').click();
    await expect(page.getByRole('row')).toHaveCount(21);
    await noOverflow(page);
    await page.getByRole('button', { name: '← Torna all’impianto' }).click();
    await expect(page.locator('#source-link')).toBeFocused();
    await page.getByRole('button', { name: 'Ho la resa del preventivo →' }).click();
    await page.locator('#produzione').fill('1.400');
    await page.getByRole('button', { name: 'Usa la stima regionale →' }).click();
    await expect(page.locator('#regione')).toHaveValue(/.+/);
    await page.getByRole('button', { name: 'Ho la resa del preventivo →' }).click();
    await expect(page.locator('#produzione')).toHaveValue('1400');
    await page.getByRole('button', { name: 'Usa la stima regionale →' }).click();
    await page.locator('#quota-link').click();
    await page.locator('#quota').fill('60');
    await page.getByRole('button', { name: 'Annulla e torna all’impianto' }).click();
    await expect(page.locator('input[name="profilo"]:checked')).toHaveValue('0.4');
    await accessible(page);
    await noOverflow(page);
    await page.screenshot({ path: testInfo.outputPath('02-impianto.png'), fullPage: true });
    await page.getByRole('button', { name: 'Calcola la simulazione →' }).click();
    await expect(page.locator('.comparison-card').first()).toContainText('7 anni');
    await expect(page.locator('.with-tax')).toContainText('Da impostare');
    await page.locator('#tax-link').click();
    await page.locator('#detrazione').fill('50');
    await page.getByRole('button', { name: 'Salva le ipotesi →' }).click();
    await expect(page.locator('.with-tax')).toContainText('5 anni e 2 mesi');
    await page.locator('#tax-link').click();
    await page.locator('#manutenzione').fill('100');
    await page.getByRole('button', { name: 'Annulla e torna ai dati' }).click();
    await expect(page.getByText('Costi ricorrenti: non inclusi', { exact: true })).toBeVisible();
    await noOverflow(page);
    await accessible(page);
    await page.screenshot({ path: testInfo.outputPath('03-risultati.png'), fullPage: true });
    await page.locator('#flows-link').click();
    if (width <= 600) {
      await expect(page.locator('.annual-card')).toHaveCount(16);
      await expect(page.locator('.annual-card').nth(11)).toContainText('Quota fiscale0,00 €');
    } else {
      await expect(page.locator('tbody tr')).toHaveCount(16);
      await expect(page.locator('tbody tr').nth(11).locator('td').nth(3)).toHaveText('0,00 €');
    }
    await noOverflow(page);
    await accessible(page);
    await page.getByRole('button', { name: '← Torna ai risultati' }).click();
    await expect(page.locator('#flows-link')).toBeFocused();
    if (width <= 600) {
      await page.locator('#scenarios-link').click();
      await expect(page.locator('.sensitivity-card')).toHaveCount(3);
      await expect(page.locator('.sensitivity')).toContainText('0,225');
      await noOverflow(page);
      await page.getByRole('button', { name: '← Torna ai risultati' }).click();
      await page.locator('#limits-link').click();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ipotesi e limiti');
      await page.getByRole('button', { name: '← Torna ai risultati' }).click();
    }
    await page.getByRole('button', { name: 'Modifica e ricalcola →' }).click();
    await expect(page.locator('#batteria')).toHaveValue('yes');
    await expect(page.locator('#orario-consumi')).toHaveValue('evening');
    await page.getByRole('button', { name: 'Calcola la simulazione →' }).click();
    page.once('dialog', (dialog) => dialog.dismiss());
    await page.getByRole('button', { name: 'Nuova simulazione', exact: true }).click();
    await expect(page.locator('.with-tax')).toContainText('5 anni e 2 mesi');
    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', { name: 'Nuova simulazione', exact: true }).click();
    await expect(page.locator('#consumo')).toHaveValue('');
    await expect(page.getByText('Dati annualizzati · da verificare', { exact: true })).toHaveCount(
      0,
    );
    expect(errors).toEqual([]);
  });
}

test('keyboard validation, saved assumptions, recalculation and page-only state', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('#consumo').fill('abc');
  await page.locator('#consumo').press('Tab');
  await expect(page.locator('#consumo-error')).toBeVisible();
  await page.locator('#consumo').fill('3000');
  await page.locator('#spesa').fill('900');
  await page.locator('#spesa').press('Enter');
  await page.locator('#kwp').fill('4,5');
  await page.locator('#costo').fill('6990');
  await page.getByRole('button', { name: 'Ho la resa del preventivo →' }).click();
  await page.locator('#produzione').fill('1400');
  await page.locator('#quota-link').click();
  await page.locator('#quota').fill('101');
  await page.getByRole('button', { name: 'Usa questa quota →' }).click();
  await expect(page.locator('#quota')).toBeFocused();
  await page.locator('#quota').fill('60');
  await page.locator('#quota').press('Enter');
  await expect(page.locator('input[name="profilo"]:checked')).toHaveValue('0.6');
  await page.locator('#economics-link').click();
  await page.locator('#detrazione').fill('50');
  await page.locator('#manutenzione').fill('100');
  await page.getByRole('button', { name: 'Salva le ipotesi →' }).click();
  await expect(page.locator('#economics-link')).toContainText('100,00');
  await page.getByRole('button', { name: 'Calcola la simulazione →' }).click();
  await expect(page.locator('.with-tax')).toContainText('5 anni e 5 mesi');
  await page.locator('#flows-link').click();
  await expect(page.locator('.annual-card').nth(1)).toContainText('Costi / esborso100,00 €');
  await page.getByRole('button', { name: '← Torna ai risultati' }).click();
  await page.locator('#privacy-link').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Dati e funzionamento');
  await page.getByRole('button', { name: '← Torna alla simulazione' }).click();
  await expect(page.locator('.with-tax')).toContainText('5 anni e 5 mesi');
  await page.reload();
  await expect(page.locator('#consumo')).toHaveValue('');
});
