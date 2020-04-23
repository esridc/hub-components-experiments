import { newE2EPage } from '@stencil/core/testing';

describe('hub-metadata-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-metadata-editor></hub-metadata-editor>');

    const element = await page.find('hub-metadata-editor');
    expect(element).toHaveClass('hydrated');
  });
});
