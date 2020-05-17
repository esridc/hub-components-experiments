# metadata-section-view



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default |
| ------------- | ------------- | ----------- | -------- | ------- |
| `description` | `description` |             | `string` | `""`    |
| `inputs`      | --            |             | `any[]`  | `[]`    |
| `title`       | `title`       |             | `string` | `""`    |


## Dependencies

### Used by

 - [metadata-form](../metadata-form)

### Depends on

- [metadata-section-help](../metadata-section-help)
- [metadata-element-view](../metadata-element-view)

### Graph
```mermaid
graph TD;
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  metadata-form --> metadata-section-view
  style metadata-section-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
