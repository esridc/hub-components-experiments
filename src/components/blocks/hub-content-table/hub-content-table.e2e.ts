import { newE2EPage } from '@stencil/core/testing';

describe('hub-content-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-content-table></hub-content-table>');

    const element = await page.find('hub-content-table');
    expect(element).toHaveClass('hydrated');
  });
});
