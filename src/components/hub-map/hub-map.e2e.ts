import { newE2EPage } from '@stencil/core/testing';

describe('hub-radar-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-radar-map></hub-radar-map>');

    const element = await page.find('hub-radar-map');
    expect(element).toHaveClass('hydrated');
  });
});
