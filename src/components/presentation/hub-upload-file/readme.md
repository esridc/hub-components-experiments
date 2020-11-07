# hub-upload-file



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                 | Type     | Default                    |
| ---------- | ----------- | ------------------------------------------- | -------- | -------------------------- |
| `clientid` | `clientid`  | ClientID to identify the app launching auth | `string` | `"WXC842NRBVB6NZ2r"`       |
| `file`     | --          |                                             | `File`   | `undefined`                |
| `itemType` | `item-type` |                                             | `string` | `undefined`                |
| `portal`   | `portal`    |                                             | `string` | `"https://www.arcgis.com"` |
| `session`  | `session`   |                                             | `string` | `undefined`                |


## Dependencies

### Used by

 - [hub-upload](../../blocks/hub-upload)

### Depends on

- calcite-notice
- [hub-metadata-editor](../../containers/hub-metadata-editor)
- calcite-loader

### Graph
```mermaid
graph TD;
  hub-upload-file --> calcite-notice
  hub-upload-file --> hub-metadata-editor
  hub-upload-file --> calcite-loader
  calcite-notice --> calcite-icon
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
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-upload --> hub-upload-file
  style hub-upload-file fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
