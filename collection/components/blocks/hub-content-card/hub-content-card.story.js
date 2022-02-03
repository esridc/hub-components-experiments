import readme from './readme.md';
/* hub-event.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Content Card', () => {
    const content = knobs.text('content', '4f5c78bfe89a4304aec3a6cfd492d0cd');
    const layout = knobs.select('layout', ['horizontal', 'vertical'], 'vertical');
    // const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
    mainEl.innerHTML = `<div style="width: 260px">
      <hub-content-card layout="${layout}" content="${content}" actionButton="button!">
      <div slot="action" >

      </div>
      </hub-content-card>
      </div>
      `;
    //<hub-follow-button clientid="${clientid}" initiativeid="${initiativeid}"> </hub-follow-button> 
    return mainEl;
  }, { notes: readme });
}
