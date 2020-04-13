import { newE2EPage } from '@stencil/core/testing';

describe('arcgis-notebook', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arcgis-notebook></arcgis-notebook>');

    const element = await page.find('arcgis-notebook');
    expect(element).toHaveClass('hydrated');
  });
});
