import { newE2EPage } from '@stencil/core/testing';

describe('hub-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-topic></hub-topic>');

    const element = await page.find('hub-topic');
    expect(element).toHaveClass('hydrated');
  });
});
