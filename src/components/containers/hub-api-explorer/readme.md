# hub-api-explorer



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                 | Default                                        |
| -------- | --------- | ----------- | ------------------------------------ | ---------------------------------------------- |
| `format` | `format`  |             | `"http" \| "javascript" \| "python"` | `"python"`                                     |
| `item`   | `item`    |             | `string`                             | `"4ef"`                                        |
| `url`    | `url`     |             | `string`                             | `"https://server.example.com/FeatureServer/0"` |


## Dependencies

### Depends on

- [metadata-section-view](../../presentation/metadata-section-view)
- calcite-tabs
- calcite-tab-nav
- calcite-tab-title
- calcite-tab

### Graph
```mermaid
graph TD;
  hub-api-explorer --> metadata-section-view
  hub-api-explorer --> calcite-tabs
  hub-api-explorer --> calcite-tab-nav
  hub-api-explorer --> calcite-tab-title
  hub-api-explorer --> calcite-tab
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-icon
  calcite-input --> calcite-progress
  calcite-input-message --> calcite-icon
  style hub-api-explorer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
