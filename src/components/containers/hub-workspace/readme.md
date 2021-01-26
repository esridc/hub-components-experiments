# hub-workspace



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                            | Type     | Default     |
| --------- | --------- | -------------------------------------- | -------- | ----------- |
| `session` | `session` | Serialized authentication information. | `string` | `undefined` |


## Dependencies

### Depends on

- [hub-places-map](../../blocks/hub-places-map)
- [hub-statistic](../../blocks/hub-statistic)
- calcite-chip
- [hub-events-list](../../blocks/hub-events-list)
- [hub-list](../../presentation/hub-list)
- [hub-card](../../presentation/hub-card)
- [hub-gallery](../hub-gallery)
- calcite-loader

### Graph
```mermaid
graph TD;
  hub-workspace --> hub-places-map
  hub-workspace --> hub-statistic
  hub-workspace --> calcite-chip
  hub-workspace --> hub-events-list
  hub-workspace --> hub-list
  hub-workspace --> hub-card
  hub-workspace --> hub-gallery
  hub-workspace --> calcite-loader
  hub-places-map --> hub-map
  hub-map --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-chip --> calcite-icon
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  hub-gallery --> hub-card
  hub-gallery --> hub-suggest-input
  hub-suggest-input --> calcite-button
  style hub-workspace fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
