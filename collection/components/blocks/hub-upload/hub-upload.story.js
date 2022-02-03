import readme from './readme.md';
/* hub-event.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Upload', () => {
    const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
    const portal = knobs.text('portal', 'https://www.arcgis.com');
    const session = knobs.text('session', '');
    mainEl.innerHTML = `
        <calcite-notice color="red" width="full" scale="s" active={true}>
        <div slot="notice-title">Authenticated User Required</div>
        <div slot="notice-message">
        Using this components requires an authenticated user. To sign-in, visit <a href='./workspace.html'>workspace example</a> and then visit this component.
        </div>
        </calcite-notice>
        <br /><br /><br />
        <hub-upload clientid="${clientid}" portal="${portal}" session="${session}"></hub-upload>
        `;
    return mainEl;
  }, { notes: readme });
}
