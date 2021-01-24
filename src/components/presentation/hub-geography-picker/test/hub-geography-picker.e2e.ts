import { newE2EPage } from '@stencil/core/testing';

describe('hub-geography-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-geography-picker></hub-geography-picker>');

    const element = await page.find('hub-geography-picker');
    expect(element).toHaveClass('hydrated');
  });
});
