const { test } = require('@playwright/test');
const { Instagram } = require('../pages/PreviewPost');

test('Pilih Post Instagram', async ({ page }) => {
    const instagram = new Instagram(page);
    await instagram.PostInstagram();

});

