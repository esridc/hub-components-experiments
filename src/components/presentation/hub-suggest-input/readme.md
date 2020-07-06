# hub-suggest-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                             | Type       | Default                                                                      |
| ------------- | ------------- | ------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| `extent`      | `extent`      | Geographic extent limit for geocoding                   | `any`      | `undefined`                                                                  |
| `placeholder` | `placeholder` | Value for input placeholder                             | `string`   | `"What are you looking for?"`                                                |
| `query`       | `query`       | Default search                                          | `string`   | `""`                                                                         |
| `submit`      | `submit`      | Value for submit button                                 | `string`   | `"Start Search"`                                                             |
| `suggestions` | --            | Values that the auto-complete textbox should search for | `string[]` | `['Apple', 'Avocado', 'Aardvark', 'Banana', 'Coconut', 'Cucumber', 'Mango']` |


## Events

| Event         | Description                         | Type               |
| ------------- | ----------------------------------- | ------------------ |
| `queryInput`  |                                     | `CustomEvent<any>` |
| `querySelect` | Emits the query of the input result | `CustomEvent<any>` |


## Dependencies

### Used by

 - [hub-gallery](../../containers/hub-gallery)
 - [hub-input](../hub-input)

### Depends on

- calcite-button

### Graph
```mermaid
graph TD;
  hub-suggest-input --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-gallery --> hub-suggest-input
  hub-input --> hub-suggest-input
  style hub-suggest-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
