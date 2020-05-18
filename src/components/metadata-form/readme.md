# metadata-form



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default    |
| -------- | --------- | ----------- | -------- | ---------- |
| `locale` | `locale`  |             | `string` | `"en"`     |
| `spec`   | `spec`    |             | `string` | `"arcgis"` |


## Dependencies

### Depends on

- [metadata-section-view](../metadata-section-view)

### Graph
```mermaid
graph TD;
  metadata-form --> metadata-section-view
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  style metadata-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
