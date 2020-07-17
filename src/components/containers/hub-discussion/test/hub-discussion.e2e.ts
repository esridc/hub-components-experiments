import { newE2EPage } from '@stencil/core/testing';

describe('hub-discussion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-discussion></hub-discussion>');

    const element = await page.find('hub-discussion');
    expect(element).toHaveClass('hydrated');
  });
});
