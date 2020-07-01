import { newE2EPage } from '@stencil/core/testing';

describe('hub-places-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-places-map></hub-places-map>');

    const element = await page.find('hub-places-map');
    expect(element).toHaveClass('hydrated');
  });
});
