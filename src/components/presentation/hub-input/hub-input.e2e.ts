import { newE2EPage } from '@stencil/core/testing';

describe('hub-radar-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-radar-input></hub-radar-input>');

    const element = await page.find('hub-radar-input');
    expect(element).toHaveClass('hydrated');
  });
});
