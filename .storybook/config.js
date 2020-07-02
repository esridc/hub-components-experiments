import { configure, addParameters } from '@storybook/html';
import buildStencilStories from './stories/stencil';

// The following contexts will be used to generate stories
// for multiple collections of components. This is particulary
// useful for monorepos where multiple packages might exist.
const COLLECTIONS = [
  {
    name: 'Hub Views',
    loader: require('../loader/index.cjs.js'),
    componentsCtx: require.context('../dist/collection', true, /\/components\/views\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.story\.tsx$/)
  }, {
    name: 'Hub Blocks',
    loader: require('../loader/index.cjs.js'),
    componentsCtx: require.context('../dist/collection', true, /\/components\/blocks\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.story\.tsx$/)
  }, {
    name: 'Hub Elements',
    loader: require('../loader/index.cjs.js'),
    componentsCtx: require.context('../dist/collection', true, /\/components\/elements\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.story\.tsx$/)
  }
];

function loadStories() {
  COLLECTIONS.forEach(({ name, loader, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, loader, componentsCtx, storiesCtx);
  });
}

addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Hub Components',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://hub.arcgis.com',
/**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: true,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: "knobs", // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false // true by default
  }
});



configure(loadStories, module);
