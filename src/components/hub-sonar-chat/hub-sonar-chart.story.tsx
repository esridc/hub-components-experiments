import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below


    stories.add('Sonar Chat (Demo)', () => {
      const service = knobs.text('service', '');
      
      mainEl.innerHTML = `<hub-sonar-chat service=${service}></hub-sonar-chat>`
  
      return mainEl;
    }, { notes: readme });

    stories.add('Sonar Chat (Live)', () => {
      const service = knobs.text('service', 'http://localui.arcgis.com:5000');
      
      mainEl.innerHTML = `<hub-sonar-chat service=${service}></hub-sonar-chat>`
  
      return mainEl;
    }, { notes: readme });
  }