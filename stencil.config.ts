import { Config } from '@stencil/core';
import '@esri/calcite-components';
import { sass } from '@stencil/sass';
 
export const config: Config = {
  plugins: [
    sass()
  ],
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
