# hub-profile-editor



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                 | Type     | Default                    |
| ---------- | ---------- | ------------------------------------------- | -------- | -------------------------- |
| `clientid` | `clientid` | ClientID to identify the app launching auth | `string` | `"WXC842NRBVB6NZ2r"`       |
| `portal`   | `portal`   |                                             | `string` | `"https://www.arcgis.com"` |
| `session`  | `session`  |                                             | `string` | `null`                     |
| `username` | `username` |                                             | `string` | `"aturner_cityx"`          |


## Dependencies

### Depends on

- [metadata-form](../../blocks/metadata-form)
- calcite-button

### Graph
```mermaid
graph TD;
  hub-profile-editor --> metadata-form
  hub-profile-editor --> calcite-button
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
  style hub-profile-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
