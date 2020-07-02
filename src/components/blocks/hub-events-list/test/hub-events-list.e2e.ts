import { newE2EPage } from '@stencil/core/testing';

describe('hub-events-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-events-list></hub-events-list>');

    const element = await page.find('hub-events-list');
    expect(element).toHaveClass('hydrated');
  });
});
