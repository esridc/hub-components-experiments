# hub-geography-picker



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                      | Type              | Default     |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `inputLocation` | `input-location` |                                                                                                                  | `string`          | `''`        |
| `location`      | `location`       | Default location to search                                                                                       | `string`          | `undefined` |
| `session`       | `session`        | Serialized authentication information.                                                                           | `string`          | `undefined` |
| `value`         | --               | Existing Hub places array of geography from metadata editor Property name `value` because re-used across editors | `IHubGeography[]` | `[]`        |


## Dependencies

### Depends on

- calcite-input
- calcite-card
- [hub-map](../../blocks/hub-map)

### Graph
```mermaid
graph TD;
  hub-geography-picker --> calcite-input
  hub-geography-picker --> calcite-card
  hub-geography-picker --> hub-map
  calcite-input --> calcite-icon
  calcite-input --> calcite-progress
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  hub-map --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style hub-geography-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
