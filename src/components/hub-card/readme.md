# hub-card

A rectangular card for showing content, optionally with an thumbnail image and link. 

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute     | Description                    | Type                         | Default         |
| -------------- | ------------- | ------------------------------ | ---------------------------- | --------------- |
| `buttonAction` | --            |                                | `Function`                   | `undefined`     |
| `buttonText`   | `button-text` |                                | `string`                     | `"Explore"`     |
| `contenttype`  | `contenttype` |                                | `string`                     | `"Local Topic"` |
| `description`  | `description` |                                | `string`                     | `"Monday"`      |
| `image`        | `image`       |                                | `string`                     | `undefined`     |
| `item`         | `item`        |                                | `string`                     | `""`            |
| `layout`       | `layout`      | Specify the layout of the card | `"horizontal" \| "vertical"` | `"vertical"`    |
| `name`         | `name`        |                                | `string`                     | `"Trash Day"`   |
| `url`          | `url`         |                                | `string`                     | `null`          |


## Dependencies

### Used by

 - [hub-content-card](../hub-content-card)
 - [hub-event](../hub-event)
 - [hub-radar](../hub-radar)
 - [hub-search](../hub-search)

### Depends on

- calcite-card
- calcite-button

### Graph
```mermaid
graph TD;
  hub-card --> calcite-card
  hub-card --> calcite-button
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  hub-content-card --> hub-card
  hub-event --> hub-card
  hub-radar --> hub-card
  hub-search --> hub-card
  style hub-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
