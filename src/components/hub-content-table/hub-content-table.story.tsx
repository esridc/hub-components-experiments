import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Content Table', () => {
      const sort = knobs.select('sort', ["name", "modified", "-name", "-modified"], 'name');
      const site = knobs.text('site', "opendata.victoria.ca")
      const query = knobs.text('query', "*")
      const limit = knobs.number('limit', 10)
      const hubapi = knobs.boolean('hubapi', true);

      mainEl.innerHTML = `<hub-content-table 
        sort="${sort}"
        site="${site}"
        query="${query}"
        limit="${limit}"
        hubapi="${hubapi}"
      ></hub-content-table>`
  
      return mainEl;
    }, { notes: readme });
}