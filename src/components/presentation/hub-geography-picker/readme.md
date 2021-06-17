# hub-geography-picker



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                      | Type              | Default     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `location`  | `location`  |                                                                                                                  | `string`          | `''`        |
| `session`   | `session`   | Serialized authentication information.                                                                           | `string`          | `undefined` |
| `uistepper` | `uistepper` |                                                                                                                  | `boolean`         | `false`     |
| `value`     | --          | Existing Hub places array of geography from metadata editor Property name `value` because re-used across editors | `IHubGeography[]` | `[]`        |


## Dependencies

### Depends on

- calcite-input
- calcite-checkbox
- calcite-tile-select
- [hub-map](../../blocks/hub-map)
- calcite-stepper
- calcite-stepper-item
- calcite-modal
- calcite-button

### Graph
```mermaid
graph TD;
  hub-geography-picker --> calcite-input
  hub-geography-picker --> calcite-checkbox
  hub-geography-picker --> calcite-tile-select
  hub-geography-picker --> hub-map
  hub-geography-picker --> calcite-stepper
  hub-geography-picker --> calcite-stepper-item
  hub-geography-picker --> calcite-modal
  hub-geography-picker --> calcite-button
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-checkbox --> calcite-label
  calcite-tile-select --> calcite-tile
  calcite-tile --> calcite-icon
  calcite-tile --> calcite-link
  calcite-link --> calcite-icon
  hub-map --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-stepper-item --> calcite-icon
  calcite-modal --> calcite-scrim
  calcite-modal --> calcite-icon
  calcite-scrim --> calcite-loader
  style hub-geography-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
