import { newE2EPage } from '@stencil/core/testing';

describe('metadata-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metadata-form></metadata-form>');

    const element = await page.find('metadata-form');
    expect(element).toHaveClass('hydrated');
  });
});
