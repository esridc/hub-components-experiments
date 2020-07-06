import { newE2EPage } from '@stencil/core/testing';

describe('hub-workspace', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-workspace></hub-workspace>');

    const element = await page.find('hub-workspace');
    expect(element).toHaveClass('hydrated');
  });
});
