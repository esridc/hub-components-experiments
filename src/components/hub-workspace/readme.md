# hub-workspace



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                            | Type     | Default     |
| --------- | --------- | -------------------------------------- | -------- | ----------- |
| `session` | `session` | Serialized authentication information. | `string` | `undefined` |


## Dependencies

### Depends on

- [hub-card](../hub-card)

### Graph
```mermaid
graph TD;
  hub-workspace --> hub-card
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  style hub-workspace fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
