import { newE2EPage } from '@stencil/core/testing';

describe('hub-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-search></hub-search>');

    const element = await page.find('hub-search');
    expect(element).toHaveClass('hydrated');
  });
});
