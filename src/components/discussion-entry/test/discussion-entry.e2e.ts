import { newE2EPage } from '@stencil/core/testing';

describe('discussion-entry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<discussion-entry></discussion-entry>');

    const element = await page.find('discussion-entry');
    expect(element).toHaveClass('hydrated');
  });
});
