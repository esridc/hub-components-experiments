# hub-places-map



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                   | Type               | Default     |
| --------- | --------- | --------------------------------------------- | ------------------ | ----------- |
| `mode`    | `mode`    | Option to view places map, or edit places map | `"edit" \| "view"` | `"view"`    |
| `places`  | --        |                                               | `IHubGeography[]`  | `[]`        |
| `session` | `session` | Serialized authentication information.        | `string`           | `undefined` |


## Dependencies

### Used by

 - [hub-workspace](../hub-workspace)

### Depends on

- [hub-map](../hub-map)

### Graph
```mermaid
graph TD;
  hub-places-map --> hub-map
  hub-map --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-workspace --> hub-places-map
  style hub-places-map fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
