import { newE2EPage } from '@stencil/core/testing';

describe('hub-upload-file', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-upload-file></hub-upload-file>');

    const element = await page.find('hub-upload-file');
    expect(element).toHaveClass('hydrated');
  });
});
