import { newE2EPage } from '@stencil/core/testing';

describe('hub-api-explorer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-api-explorer></hub-api-explorer>');

    const element = await page.find('hub-api-explorer');
    expect(element).toHaveClass('hydrated');
  });
});
