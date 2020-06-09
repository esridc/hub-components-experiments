import { newSpecPage } from '@stencil/core/testing';
import { ArcgisSurvey } from '../arcgis-survey';

describe('arcgis-survey', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcgisSurvey],
      html: `<arcgis-survey></arcgis-survey>`,
    });
    expect(page.root).toEqualHtml(`
      <arcgis-survey>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arcgis-survey>
    `);
  });
});
