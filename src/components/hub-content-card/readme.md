# hub-content-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                         | Default                              |
| -------------- | --------------- | ----------- | ---------------------------- | ------------------------------------ |
| `actionButton` | `action-button` |             | `any`                        | `undefined`                          |
| `content`      | `content`       |             | `string`                     | `"4f5c78bfe89a4304aec3a6cfd492d0cd"` |
| `contentItem`  | --              |             | `IContent`                   | `null`                               |
| `layout`       | `layout`        |             | `"horizontal" \| "vertical"` | `"vertical"`                         |


## Dependencies

### Depends on

- [hub-card](../hub-card)

### Graph
```mermaid
graph TD;
  hub-content-card --> hub-card
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  style hub-content-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
