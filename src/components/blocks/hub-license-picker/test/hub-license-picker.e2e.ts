import { newE2EPage } from '@stencil/core/testing';

describe('hub-license-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-license-picker></hub-license-picker>');

    const element = await page.find('hub-license-picker');
    expect(element).toHaveClass('hydrated');
  });
});
