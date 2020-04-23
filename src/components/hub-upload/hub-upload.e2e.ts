import { newE2EPage } from '@stencil/core/testing';

describe('hub-upload', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-upload></hub-upload>');

    const element = await page.find('hub-upload');
    expect(element).toHaveClass('hydrated');
  });
});
