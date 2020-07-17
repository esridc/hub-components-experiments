# Hub Components 

Web components for embedding Hub into websites and custom applications.

## Types of Components

- **Containers** - full-featured composition of multiple blocks + elements, optionally managing state
- **Blocks** - 'Smart' components (optionally) managing data; composed of elements, and maybe other blocks
- **Presentation** - Functional presentation components that only contain other elements

_Containers_ are complex, manage state and are used for prototypes and optionally as larger reusable components. For example, _Content Picker_ or _Discussion_

_Blocks_ are the most common component that can be used stand-alone within a card or website by providing configuration to either fetch new data or display data that is provided. Examples include _Event List_ or _Data Statistic_ 

_Presentation_ provide consistent presentation but do not interact with outside systems. 

There are many components which may work as both a Block or Presentation, for example _Data Statistic_. This example component could be configured with static strings + values; or it could be configured with a data reference + statistical operations. At first this component can be a single block with minimal logic that's delegated to an external library (e.g. Hub.js). Only when the Block becomes sufficiently complex, or there are variations (or desired re-used in the presentation) then this Block could be decomposed into external Presentation components. 

## Using these components

### Script tag

Add `<script src='https://unpkg.com/@esri/radar@0.1.15/dist/radar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### React App

To use Hub components in a React application, see [Stencil.js docs on React](https://stenciljs.com/docs/react)

### Ember App

To use Hub components in an Ember application, use [ember-cli-stencil](https://github.com/alexlafroscia/ember-cli-stencil)
- Run `ember install ember-cli-stencil ember-auto-import`
- Run `npm install @esri/radar --save`

### In a stencil-starter app
- Run `npm install hub-radar --save`
- Add an import to the npm packages `import hub-radar;`
- Then you can use the element anywhere in your template, JSX, html etc


## Development 

```bash
npm install
npm start
```

### Add new components

To build a new component:

```bash
npx stencil g
```

Please preface all component files with `hub-` and component modules with `Hub`
for example `hub-map.tsx` annd `HubMap`

See [Stencil Cheatsheet](https://devhints.io/stencil) for great tips developing with Stencil. 

### Storybook

To view the components in an explorable player:

```bash
npm run storybook
```

### Deploy

To build the component for production, run:

```bash
npm run build
```

To publish storybook to GitHub pages

```bash
npm run deploy-storybook
```

### Test
To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).




![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)# covid-report
