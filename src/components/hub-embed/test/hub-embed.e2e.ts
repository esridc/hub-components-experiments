import { newE2EPage } from '@stencil/core/testing';

describe('hub-embed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-embed></hub-embed>');

    const element = await page.find('hub-embed');
    expect(element).toHaveClass('hydrated');
  });
});
