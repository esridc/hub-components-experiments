# metadata-form



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type       | Default |
| ---------- | ---------- | ----------- | ---------- | ------- |
| `locale`   | `locale`   |             | `string`   | `"en"`  |
| `resource` | `resource` |             | `any`      | `null`  |
| `sections` | --         |             | `string[]` | `[]`    |


## Dependencies

### Used by

 - [hub-metadata-editor](../../containers/hub-metadata-editor)
 - [hub-profile-editor](../../containers/hub-profile-editor)

### Depends on

- calcite-accordion
- calcite-accordion-item
- [metadata-section-view](../../presentation/metadata-section-view)

### Graph
```mermaid
graph TD;
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
  hub-metadata-editor --> metadata-form
  hub-profile-editor --> metadata-form
  style metadata-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
