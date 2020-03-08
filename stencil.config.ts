import { Config } from '@stencil/core';
import '@esri/calcite-components';

export const config: Config = {
  commonjs: {
    namedExports: {
      "node_modules/esri-loader/dist/umd/esri-loader.js": [
        "getScript",
        "isLoaded",
        "loadModules",
        "loadScript",
        "loadCss",
        "utils"
      ]
    }
  },
  copy: [{
    src: "**/*.i18n.*.json",
    dest: "i18n"
  }],
  devServer: {
    root: "www"
  },  
  namespace: 'radar',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
