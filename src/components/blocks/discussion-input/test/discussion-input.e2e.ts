import { newE2EPage } from '@stencil/core/testing';

describe('discussion-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<discussion-input></discussion-input>');

    const element = await page.find('discussion-input');
    expect(element).toHaveClass('hydrated');
  });
});
