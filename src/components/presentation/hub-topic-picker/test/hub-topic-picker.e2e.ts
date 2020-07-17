import { newE2EPage } from '@stencil/core/testing';

describe('hub-topic-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-topic-picker></hub-topic-picker>');

    const element = await page.find('hub-topic-picker');
    expect(element).toHaveClass('hydrated');
  });
});
