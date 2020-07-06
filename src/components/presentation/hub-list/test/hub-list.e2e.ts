import { newE2EPage } from '@stencil/core/testing';

describe('hub-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-list></hub-list>');

    const element = await page.find('hub-list');
    expect(element).toHaveClass('hydrated');
  });
});
