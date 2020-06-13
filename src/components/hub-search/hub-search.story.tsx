import readme from './readme.md'

/* hub-search.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Search', () => {
      const sort = knobs.select('sort', ['title', '-title', 'modified', '-modified'], 'title');
      const site = knobs.text('site', ''); //'opendata.dc.gov'
      const groups = knobs.text('groups', 'eca7c9c83df04cf5bf916ca487362aae');
      const searchbutton = knobs.text('searchbutton', "Start Search");
      const limit = knobs.number('limit', 12);
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Explore');
      const showsearch = knobs.boolean('showsearch', true);
      const hubapi = knobs.boolean('hubapi', true);
      
      mainEl.innerHTML = `<hub-search 
        showsearch="${showsearch}"
        searchbutton="${searchbutton}" 
        searchplaceholder="${searchplaceholder}" 
        buttontext="${buttontext}" 
        groups="${groups}" 
        limit="${limit}"
        site="${site}" 
        sort="${sort}"
        hubapi="${hubapi}"
        ></hub-search>`
  
      return mainEl;
    }, { notes: readme});
  
}