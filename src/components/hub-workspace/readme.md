# hub-workspace



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                            | Type     | Default     |
| --------- | --------- | -------------------------------------- | -------- | ----------- |
| `session` | `session` | Serialized authentication information. | `string` | `undefined` |


## Dependencies

### Depends on

- [hub-identity](../hub-identity)

### Graph
```mermaid
graph TD;
  hub-workspace --> hub-identity
  hub-identity --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style hub-workspace fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
