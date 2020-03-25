import readme from './readme.md'

/* hub-search.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Search', () => {
      const sort = knobs.select('name', ['name', 'modified'], 'name');
      const site = knobs.text('site', 'opendata.dc.gov');
      const layout = knobs.select('layout', ['horizontal', 'vertical'], 'horizontal');
  
      mainEl.innerHTML = `<hub-search layout=${layout} site=${site} sort="${sort}"></hub-search>`
  
      return mainEl;
    }, { notes: readme});
  
}