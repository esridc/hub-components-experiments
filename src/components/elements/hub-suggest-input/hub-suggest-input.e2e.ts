import { newE2EPage } from '@stencil/core/testing';

describe('hub-suggest-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-suggest-input></hub-suggest-input>');

    const element = await page.find('hub-suggest-input');
    expect(element).toHaveClass('hydrated');
  });
});
