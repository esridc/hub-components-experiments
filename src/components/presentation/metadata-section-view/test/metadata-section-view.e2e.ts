import { newE2EPage } from '@stencil/core/testing';

describe('metadata-section-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metadata-section-view></metadata-section-view>');

    const element = await page.find('metadata-section-view');
    expect(element).toHaveClass('hydrated');
  });
});
