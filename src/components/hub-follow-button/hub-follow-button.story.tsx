import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
      
    stories.add('Hub Follow Button', () => {
      const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
      const initiativeid = knobs.text('initiativeid', '6f28b477336b46a889c16e4ceb61791e');
          
      const code = `<hub-follow-button class="child" clientid="${clientid}" initiativeid="${initiativeid}"> </hub-follow-button>`
      mainEl.innerHTML = code;
      
      return mainEl;
    }, { notes: readme });
  }