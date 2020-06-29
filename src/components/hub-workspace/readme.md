# hub-workspace



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                            | Type     | Default     |
| --------- | --------- | -------------------------------------- | -------- | ----------- |
| `session` | `session` | Serialized authentication information. | `string` | `undefined` |


## Dependencies

### Depends on

- [hub-map](../hub-map)
- [hub-statistic](../hub-statistic)
- calcite-chip
- [hub-events-list](../hub-events-list)
- [hub-card](../hub-card)

### Graph
```mermaid
graph TD;
  hub-workspace --> hub-map
  hub-workspace --> hub-statistic
  hub-workspace --> calcite-chip
  hub-workspace --> hub-events-list
  hub-workspace --> hub-card
  hub-map --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-chip --> calcite-icon
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  style hub-workspace fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
