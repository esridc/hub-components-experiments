import { newE2EPage } from '@stencil/core/testing';

describe('hub-content-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-content-card></hub-content-card>');

    const element = await page.find('hub-content-card');
    expect(element).toHaveClass('hydrated');
  });
});
