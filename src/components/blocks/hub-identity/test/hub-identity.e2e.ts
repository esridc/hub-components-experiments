import { newE2EPage } from '@stencil/core/testing';

describe('hub-identity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-identity></hub-identity>');

    const element = await page.find('hub-identity');
    expect(element).toHaveClass('hydrated');
  });
});
