import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
    mainEl.addEventListener('linkClicked', e => {
      alert("Link clicked!");
      console.debug("Link clicked", e)
    })

    stories.add('Hub Link/Hard Link', () => {
        const evented = knobs.boolean('evented', false);
        const link = knobs.text('link', 'https://google.com');
        const text = knobs.text('text', 'View the Link')
      mainEl.innerHTML = `<hub-link evented="${evented}" link="${link}" >${text}</hub-link>`
      return mainEl;
    }, { notes: readme });

    stories.add('Hub Link/Framework Link', () => {
      const evented = knobs.boolean('evented', false);
      const link = knobs.text('link', 'https://google.com');
      const text = knobs.text('text', 'View the Link')
    mainEl.innerHTML = `<div data-framework=true><hub-link evented="${evented}" link="${link}" >${text}</hub-link></div>`
    return mainEl;
  }, { notes: readme });
      
}