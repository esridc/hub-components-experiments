import { newE2EPage } from '@stencil/core/testing';

describe('hub-profile-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-profile-editor></hub-profile-editor>');

    const element = await page.find('hub-profile-editor');
    expect(element).toHaveClass('hydrated');
  });
});
