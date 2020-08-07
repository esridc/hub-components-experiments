import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Countdown', () => {
      const start = knobs.text('start', '');
      const end = knobs.text('end', '2020-12-31');
      const remainingText = knobs.text('end-text', 'days until the end of the year');
        
      mainEl.innerHTML = `
      <hub-countdown start="${start}" end="${end}" end-text="${remainingText}">
      </hub-countdown>`
      return mainEl;
    }, { notes: readme });
}