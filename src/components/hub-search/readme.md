# hub-search



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                      | Type                   | Default  |
| -------- | --------- | -------------------------------- | ---------------------- | -------- |
| `site`   | `site`    | Hub site URL to scope for search | `string`               | `""`     |
| `sort`   | `sort`    | Hub site URL to scope for search | `"modified" \| "name"` | `"name"` |


## Dependencies

### Depends on

- [hub-suggest-input](../hub-suggest-input)
- [hub-content-card](../hub-content-card)

### Graph
```mermaid
graph TD;
  hub-search --> hub-suggest-input
  hub-search --> hub-content-card
  hub-content-card --> hub-card
  hub-card --> hub-button
  hub-button --> calcite-button
  calcite-button --> calcite-loader
  style hub-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
