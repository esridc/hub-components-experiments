import readme from './readme.md';
/* hub-event.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Identity', () => {
    const message = knobs.text('message', 'Sign In');
    const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
    const orgurl = knobs.text('orgurl', 'https://cityx.maps.arcgis.com');
    mainEl.innerHTML = `<hub-identity clientid="${clientid}" message="${message}" orgurl="${orgurl}"></hub-identity>`;
    return mainEl;
  }, { notes: readme });
}
