import readme from './readme.md'

/* hub-search.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Gallery (groups)', () => {
      const sort = knobs.select('sort', ['title', '-title', 'modified', '-modified'], 'title');
      const groups = knobs.text('groups', 'eca7c9c83df04cf5bf916ca487362aae');
      const searchbutton = knobs.text('searchbutton', "Search Gallery");
      const limit = knobs.number('limit', 12);
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Explore');
      const showsearch = knobs.boolean('showsearch', true);
      const hubapi = knobs.boolean('hubapi', false);
      
      mainEl.innerHTML = `<hub-gallery 
        hubtype="content"
        showsearch="${showsearch}"
        searchbutton="${searchbutton}" 
        searchplaceholder="${searchplaceholder}" 
        buttontext="${buttontext}" 
        groups="${groups}" 
        limit="${limit}"
        sort="${sort}"
        hubapi="${hubapi}"
        ></hub-gallery>`
  
      return mainEl;
    }, { notes: readme});


    stories.add('Hub Gallery (site)', () => {
      const sort = knobs.select('sort', ['title', '-title', 'modified', '-modified'], 'title');
      const hubtype = knobs.select('hubtype', ["content", "members", "teams"], 'content');
      const site = knobs.text('site', 'opendata.dc.gov');
      const searchbutton = knobs.text('searchbutton', "Start Search");
      const limit = knobs.number('limit', 12);
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Explore');
      const showsearch = knobs.boolean('showsearch', true);
      const hubapi = knobs.boolean('hubapi', false);
      
      mainEl.innerHTML = `<hub-gallery 
        hubtype="${hubtype}"
        showsearch="${showsearch}"
        searchbutton="${searchbutton}" 
        searchplaceholder="${searchplaceholder}" 
        buttontext="${buttontext}" 
        limit="${limit}"
        site="${site}" 
        sort="${sort}"
        hubapi="${hubapi}"
        ></hub-gallery>`
  
      return mainEl;
    }, { notes: readme});    

    stories.add('Hub Gallery (members)', () => {
      const sort = knobs.select('sort', ['title', '-title', 'modified', '-modified'], 'title');
      const hubtype = knobs.select('hubtype', ["content", "members", "teams"], 'members');
      const searchbutton = knobs.text('searchbutton', "Start Search");
      const limit = knobs.number('limit', 12);
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Explore');
      const showsearch = knobs.boolean('showsearch', true);
      const hubapi = knobs.boolean('hubapi', false);
      
      mainEl.innerHTML = `<hub-gallery 
        hubtype="${hubtype}"
        showsearch="${showsearch}"
        searchbutton="${searchbutton}" 
        searchplaceholder="${searchplaceholder}" 
        buttontext="${buttontext}" 
        limit="${limit}"
        sort="${sort}"
        hubapi="${hubapi}"
        ></hub-gallery>`
  
      return mainEl;
    }, { notes: readme});    
 
    stories.add('Hub Gallery (teams)', () => {
      const sort = knobs.select('sort', ['title', '-title', 'modified', '-modified'], 'title');
      const query = knobs.text('query', "water");
      
      const hubtype = knobs.select('hubtype', ["content", "members", "teams"], 'teams');
      const searchbutton = knobs.text('searchbutton', "Start Teams");
      const limit = knobs.number('limit', 12);
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Visit Team');
      const showsearch = knobs.boolean('showsearch', true);
      const hubapi = knobs.boolean('hubapi', false);
      
      mainEl.innerHTML = `<hub-gallery 
        query="${query}"
        hubtype="${hubtype}"
        showsearch="${showsearch}"
        searchbutton="${searchbutton}" 
        searchplaceholder="${searchplaceholder}" 
        buttontext="${buttontext}" 
        limit="${limit}"
        sort="${sort}"
        hubapi="${hubapi}"
        ></hub-gallery>`
  
      return mainEl;
    }, { notes: readme});    
}