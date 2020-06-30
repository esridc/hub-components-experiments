# discussion-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                            | Type     | Default                    |
| ---------------- | ----------------- | -------------------------------------- | -------- | -------------------------- |
| `annotationsUrl` | `annotations-url` |                                        | `string` | `undefined`                |
| `placeholder`    | `placeholder`     |                                        | `string` | `"Join the discussion..."` |
| `session`        | `session`         | Serialized authentication information. | `string` | `undefined`                |
| `submit`         | `submit`          |                                        | `string` | `"Share comment"`          |
| `target`         | `target`          |                                        | `string` | `undefined`                |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `eventAddAnnotation` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [hub-discussion](../hub-discussion)

### Depends on

- calcite-button
- calcite-alert

### Graph
```mermaid
graph TD;
  discussion-input --> calcite-button
  discussion-input --> calcite-alert
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-alert --> calcite-icon
  hub-discussion --> discussion-input
  style discussion-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
