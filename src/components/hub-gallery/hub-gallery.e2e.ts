import { newE2EPage } from '@stencil/core/testing';

describe('hub-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-gallery></hub-gallery>');

    const element = await page.find('hub-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
