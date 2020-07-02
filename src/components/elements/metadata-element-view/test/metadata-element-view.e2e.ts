import { newE2EPage } from '@stencil/core/testing';

describe('metadata-element-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metadata-element-view></metadata-element-view>');

    const element = await page.find('metadata-element-view');
    expect(element).toHaveClass('hydrated');
  });
});
