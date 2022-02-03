import readme from './readme.md';
/* radar-map.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Geography Picker', () => {
    // const clientid = knobs.text("clientid", "WXC842NRBVB6NZ2r");
    // const orgurl = knobs.text("portal", "https://www.arcgis.com");
    const clientid = knobs.text("clientid", "WXC842NRBVB6NZ2r");
    const orgurl = knobs.text("portal", "https://www.arcgis.com");
    const uistepper = knobs.boolean("stepper", false);
    const session = knobs.text("session", "");
    mainEl.innerHTML = `
        You need to be signed in to try this component. This will not work in an iframe, so you need to first view this outside the iframe to authenticate.
        <hub-identity             
          clientid=${clientid}
          orgurl=${orgurl}
          displaysignin=${true}
          displaysignout=${true}
          displayusername=${true}
          session=${session}
        ></hub-identity> 
          <hr />

        <hub-geography-picker
          uistepper=${uistepper}
          session=${session}
        ></hub-geography-picker>
               `;
    return mainEl;
  }, { notes: readme });
}
