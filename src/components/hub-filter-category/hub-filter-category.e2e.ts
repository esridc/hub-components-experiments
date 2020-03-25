import { newE2EPage } from '@stencil/core/testing';

describe('hub-filter-category', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-filter-category></hub-filter-category>');

    const element = await page.find('hub-filter-category');
    expect(element).toHaveClass('hydrated');
  });
});
