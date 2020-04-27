import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import '@esri/calcite-components';
 
export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/includes.scss"],
    }),
  ],
  globalStyle: 'src/global/global.scss',
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
