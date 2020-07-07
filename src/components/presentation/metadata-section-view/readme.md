# metadata-section-view



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                        | Type           | Default    |
| -------------- | --------------- | -------------------------------------------------- | -------------- | ---------- |
| `description`  | `description`   |                                                    | `string`       | `""`       |
| `elementTitle` | `element-title` |                                                    | `string`       | `""`       |
| `inputs`       | --              | JSON Schema Properties section                     | `any[]`        | `[]`       |
| `locale`       | `locale`        |                                                    | `string`       | `"en"`     |
| `resource`     | --              | Hub Resource object.                               | `IHubResource` | `null`     |
| `spec`         | `spec`          |                                                    | `string`       | `"arcgis"` |
| `translator`   | `translator`    | Which translator to use from the schema definition | `string`       | `"arcgis"` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `resourceUpdated` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [metadata-form](../../blocks/metadata-form)

### Depends on

- [metadata-section-help](../metadata-section-help)
- [metadata-element-view](../metadata-element-view)

### Graph
```mermaid
graph TD;
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  metadata-form --> metadata-section-view
  style metadata-section-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
