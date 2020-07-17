import readme from './readme.md'
import design from './design.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below


    stories.add('Radar/Hub Radar', () => {
      const webmap = knobs.text('webmap', '2e725f2d5b7640b28121af931048894c');
      const address = knobs.text('address', '');
      const showmap = knobs.boolean('Show Map', false)
  
      mainEl.innerHTML = `<hub-radar showmap=${showmap} webmap="${webmap}" address="${address}"></hub-radar>`
  
      return mainEl;
    }, { notes: readme, design: design });

    stories.add('Radar/Hub Radar2', () => {
      const webmap = knobs.text('webmap', '2e725f2d5b7640b28121af931048894c');
      const address = knobs.text('address', '4321 12th St NE');
      const showmap = knobs.boolean('Show Map', true)
  
      mainEl.innerHTML = `
      <h4>Showing Local Results using the "Radar" card</h4>
      <div style="width: 500px; border: 1px solid #888;"><hub-radar showmap=${showmap} webmap="${webmap}" address="${address}">
      <strong style="margin-left: 8px;" slot="before-input">Search your DC address</strong>
      <!-- <em slot="before-results">Local information</em> -->
      <em slot="after-results">Visit <a href="https://opendata.dc.gov">OpenData</a></em>
    </hub-radar></div>`
  
      return mainEl;
    }, { notes: readme, design: design });
  }