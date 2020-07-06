import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, _knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below


    stories.add('Hub Topic Picker', () => {
        mainEl.innerHTML = `<hub-topic-picker></hub-topic-picker>`
                
        return mainEl;
    }, { notes: readme });
  }