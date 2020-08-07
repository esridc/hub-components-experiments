import { newE2EPage } from '@stencil/core/testing';

describe('hub-countdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-countdown></hub-countdown>');

    const element = await page.find('hub-countdown');
    expect(element).toHaveClass('hydrated');
  });
});
