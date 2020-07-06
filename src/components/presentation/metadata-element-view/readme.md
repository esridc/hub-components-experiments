# metadata-element-view



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default          |
| ------------- | ------------- | ----------- | --------- | ---------------- |
| `description` | `description` |             | `string`  | `""`             |
| `id`          | `id`          |             | `string`  | `"title"`        |
| `required`    | `required`    |             | `boolean` | `false`          |
| `title`       | `title`       |             | `string`  | `"Input: Title"` |
| `type`        | `type`        |             | `string`  | `"text"`         |
| `value`       | `value`       |             | `string`  | `""`             |


## Dependencies

### Used by

 - [metadata-section-view](../metadata-section-view)

### Depends on

- calcite-label
- calcite-input
- calcite-input-message

### Graph
```mermaid
graph TD;
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  metadata-section-view --> metadata-element-view
  style metadata-element-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
