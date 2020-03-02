import { newE2EPage } from '@stencil/core/testing';

describe('hub-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-chat></hub-chat>');

    const element = await page.find('hub-chat');
    expect(element).toHaveClass('hydrated');
  });
});
