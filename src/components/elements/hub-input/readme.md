# hub-radar-input



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                           | Type     | Default     |
| --------- | --------- | ------------------------------------- | -------- | ----------- |
| `address` | `address` | Default address to search             | `string` | `undefined` |
| `extent`  | `extent`  | Geographic extent limit for geocoding | `any`    | `undefined` |


## Events

| Event                 | Description                                             | Type               |
| --------------------- | ------------------------------------------------------- | ------------------ |
| `eventAddressUpdated` | Emits the {address, coordinates} of the geocoded result | `CustomEvent<any>` |


## Dependencies

### Used by

 - [hub-radar](../../views/hub-radar)

### Depends on

- [hub-suggest-input](../hub-suggest-input)

### Graph
```mermaid
graph TD;
  hub-input --> hub-suggest-input
  hub-suggest-input --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-radar --> hub-input
  style hub-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
