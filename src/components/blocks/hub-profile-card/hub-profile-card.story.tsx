import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Profile Card', () => {
      const type = knobs.select('type', ['member', 'team'], 'member');
      const id = knobs.text('id', 'ajturner')

      mainEl.innerHTML = `<div style="width: 260px"><hub-profile-card
        type="${type}"
        id="${id}"
      ></hub-profile-card></div>`
  
      return mainEl;
    }, { notes: readme });
}