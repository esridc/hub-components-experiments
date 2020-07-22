# hub-download-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default                   |
| -------------- | ---------------- | ----------- | -------- | ------------------------- |
| `datasetId`    | `dataset-id`     |             | `string` | `undefined`               |
| `filename`     | `filename`       |             | `string` | `undefined`               |
| `format`       | `format`         |             | `string` | `undefined`               |
| `geometry`     | `geometry`       |             | `string` | `undefined`               |
| `host`         | `host`           |             | `string` | `'http://localhost:3000'` |
| `name`         | `name`           |             | `string` | `undefined`               |
| `spatialRefId` | `spatial-ref-id` |             | `string` | `'4326'`                  |
| `target`       | `target`         |             | `string` | `undefined`               |
| `token`        | `token`          |             | `string` | `undefined`               |
| `username`     | `username`       |             | `string` | `undefined`               |
| `where`        | `where`          |             | `string` | `undefined`               |


## Dependencies

### Depends on

- [hub-download-notice](../hub-download-notice)
- calcite-button
- calcite-dropdown
- calcite-dropdown-group
- calcite-dropdown-item
- calcite-card

### Graph
```mermaid
graph TD;
  hub-download-card --> hub-download-notice
  hub-download-card --> calcite-button
  hub-download-card --> calcite-dropdown
  hub-download-card --> calcite-dropdown-group
  hub-download-card --> calcite-dropdown-item
  hub-download-card --> calcite-card
  hub-download-notice --> calcite-notice
  hub-download-notice --> calcite-loader
  calcite-notice --> calcite-icon
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-dropdown-item --> calcite-icon
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  style hub-download-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
