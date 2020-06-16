import { newE2EPage } from '@stencil/core/testing';

describe('hub-profile-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-profile-card></hub-profile-card>');

    const element = await page.find('hub-profile-card');
    expect(element).toHaveClass('hydrated');
  });
});
