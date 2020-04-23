import { newE2EPage } from '@stencil/core/testing';

describe('drop-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<drop-area></drop-area>');

    const element = await page.find('drop-area');
    expect(element).toHaveClass('hydrated');
  });
});
