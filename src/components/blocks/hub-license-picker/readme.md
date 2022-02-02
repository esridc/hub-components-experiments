# hub-license-picker



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type     | Default |
| --------- | --------- | ----------- | -------- | ------- |
| `license` | `license` |             | `string` | `"cc0"` |


## Dependencies

### Depends on

- calcite-card
- calcite-link
- calcite-modal
- calcite-tabs
- calcite-tab-nav
- calcite-tab-title
- calcite-tab
- [metadata-form](../metadata-form)
- calcite-button

### Graph
```mermaid
graph TD;
  hub-license-picker --> calcite-card
  hub-license-picker --> calcite-link
  hub-license-picker --> calcite-modal
  hub-license-picker --> calcite-tabs
  hub-license-picker --> calcite-tab-nav
  hub-license-picker --> calcite-tab-title
  hub-license-picker --> calcite-tab
  hub-license-picker --> metadata-form
  hub-license-picker --> calcite-button
  calcite-card --> calcite-loader
  calcite-card --> calcite-label
  calcite-card --> calcite-checkbox
  calcite-link --> calcite-icon
  calcite-modal --> calcite-scrim
  calcite-modal --> calcite-icon
  calcite-scrim --> calcite-loader
  calcite-tab-title --> calcite-icon
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
  style hub-license-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
