import readme from './readme.md'

/* hub-search.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Search', () => {
      const sort = knobs.select('name', ['name', 'modified'], 'name');
      const site = knobs.text('site', 'opendata.dc.gov');
  
      mainEl.innerHTML = `<hub-search site=${site} sort="${sort}"></hub-search>`
  
      return mainEl;
    }, { notes: readme});
  
}