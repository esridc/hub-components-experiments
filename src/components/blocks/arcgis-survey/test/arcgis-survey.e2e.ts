import { newE2EPage } from '@stencil/core/testing';

describe('arcgis-survey', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arcgis-survey></arcgis-survey>');

    const element = await page.find('arcgis-survey');
    expect(element).toHaveClass('hydrated');
  });
});
