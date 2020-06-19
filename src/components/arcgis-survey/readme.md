# arcgis-survey



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default                              |
| -------- | --------- | ----------- | -------- | ------------------------------------ |
| `item`   | `item`    |             | `string` | `"1a712571473448e891978869cd899b38"` |


## Dependencies

### Depends on

- [hub-embed](../hub-embed)

### Graph
```mermaid
graph TD;
  arcgis-survey --> hub-embed
  hub-embed --> calcite-button
  hub-embed --> calcite-modal
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-modal --> calcite-scrim
  calcite-modal --> calcite-icon
  calcite-scrim --> calcite-loader
  style arcgis-survey fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
