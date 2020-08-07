import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Countdown', () => {
        const endDate = knobs.text('endDate', '2020-12-31');
        
      mainEl.innerHTML = `<hub-countdown></hub-countdown>
      <hub-countdown end-date="${endDate}"></hub-countdown>`
      return mainEl;
    }, { notes: readme });
}