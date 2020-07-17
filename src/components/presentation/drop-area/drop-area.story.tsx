import readme from './readme.md'

export default function(stories, _knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('View/Drop Area', () => {
        
      mainEl.innerHTML = `<drop-area></drop-area>`
      return mainEl;
    }, { notes: readme });
}