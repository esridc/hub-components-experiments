# hub-profile-editor



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                 | Type     | Default                    |
| ---------- | ---------- | ------------------------------------------- | -------- | -------------------------- |
| `clientid` | `clientid` | ClientID to identify the app launching auth | `string` | `"WXC842NRBVB6NZ2r"`       |
| `portal`   | `portal`   |                                             | `string` | `"https://www.arcgis.com"` |
| `session`  | `session`  |                                             | `string` | `null`                     |
| `username` | `username` |                                             | `string` | `"ajturner"`               |


## Dependencies

### Depends on

- [metadata-form](../metadata-form)

### Graph
```mermaid
graph TD;
  hub-profile-editor --> metadata-form
  metadata-form --> metadata-section-view
  metadata-section-view --> metadata-section-help
  metadata-section-view --> metadata-element-view
  metadata-element-view --> calcite-label
  metadata-element-view --> calcite-input
  metadata-element-view --> calcite-input-message
  calcite-input --> calcite-progress
  calcite-input --> calcite-icon
  calcite-input-message --> calcite-icon
  style hub-profile-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
