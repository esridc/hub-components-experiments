# hub-search



<!-- Auto Generated Below -->


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
  calcite-button --> calcite-icon
  style hub-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
