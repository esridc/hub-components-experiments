import { newE2EPage } from '@stencil/core/testing';

describe('metadata-section-help', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metadata-section-help></metadata-section-help>');

    const element = await page.find('metadata-section-help');
    expect(element).toHaveClass('hydrated');
  });
});
