import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Content Table', () => {
      const sort = knobs.select('sort', ["name", "modified", "-name", "-modified"], 'name');
      const site = knobs.text('site', "opendata.victoria.ca")
      const query = knobs.text('query', "*")
      const limit = knobs.number('limit', 10)

      mainEl.innerHTML = `<hub-content-table 
        sort="${sort}"
        site="${site}"
        query="${query}"
        limit="${limit}"
      ></hub-content-table>`
  
      return mainEl;
    }, { notes: readme });
}