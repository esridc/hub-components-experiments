import readme from './readme.md'

/* hub-filter-category.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
      
    stories.add('Hub Filter Category', () => {

        const name = knobs.text('name', "Tree Type")

        const code = `<hub-filter-category name="${name}"> </hub-filter-category>`
        mainEl.innerHTML = code;
        
        return mainEl;
    }, { notes: readme });
  }