# hub-search



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                      | Type                         | Default        |
| -------- | --------- | -------------------------------- | ---------------------------- | -------------- |
| `layout` | `layout`  | Hub site URL to scope for search | `"horizontal" \| "vertical"` | `"horizontal"` |
| `site`   | `site`    | Hub site URL to scope for search | `string`                     | `""`           |
| `sort`   | `sort`    | Hub site URL to scope for search | `"modified" \| "name"`       | `"name"`       |


## Dependencies

### Depends on

- [hub-content-card](../hub-content-card)
- [hub-suggest-input](../hub-suggest-input)

### Graph
```mermaid
graph TD;
  hub-search --> hub-content-card
  hub-search --> hub-suggest-input
  hub-content-card --> hub-card
  hub-card --> hub-button
  hub-button --> calcite-button
  calcite-button --> calcite-loader
  style hub-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
