import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Places Map', () => {
      const mode = knobs.select('mode', ['view', 'edit'], 'edit');
        
      mainEl.innerHTML = `<div style="height: 500px">
      <hub-places-map
        mode="${mode}"
      ><hub--places-map>
      </div>`
      return mainEl;
    }, { notes: readme });
}