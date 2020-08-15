# hub-metadata-editor



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                 | Type       | Default                              |
| ----------- | ------------ | ------------------------------------------- | ---------- | ------------------------------------ |
| `clientid`  | `clientid`   | ClientID to identify the app launching auth | `string`   | `"WXC842NRBVB6NZ2r"`                 |
| `item`      | `item`       |                                             | `string`   | `"1467319d449c44548bd63217f9b3c45a"` |
| `itemTitle` | `item-title` |                                             | `string`   | `undefined`                          |
| `portal`    | `portal`     |                                             | `string`   | `"https://www.arcgis.com"`           |
| `session`   | `session`    |                                             | `string`   | `null`                               |
| `summary`   | `summary`    |                                             | `string`   | `undefined`                          |
| `tags`      | --           |                                             | `string[]` | `[]`                                 |


## Dependencies

### Used by

 - [hub-upload-file](../../presentation/hub-upload-file)

### Depends on

- [metadata-form](../../blocks/metadata-form)
- calcite-button

### Graph
```mermaid
graph TD;
  hub-metadata-editor --> metadata-form
  hub-metadata-editor --> calcite-button
  metadata-form --> calcite-accordion
  metadata-form --> calcite-accordion-item
  metadata-form --> metadata-section-view
  calcite-accordion-item --> calcite-icon
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-icon
  calcite-input --> calcite-progress
  calcite-input-message --> calcite-icon
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-upload-file --> hub-metadata-editor
  style hub-metadata-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
