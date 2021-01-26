# hub-profile-card



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                   | Type     | Default    |
| ---------- | ---------- | --------------------------------------------- | -------- | ---------- |
| `type`     | `type`     | Which Profile: member, team                   | `string` | `"member"` |
| `username` | `username` | ID For the profile. Username, Team ID, Org ID | `string` | `""`       |


## Dependencies

### Depends on

- [hub-card](../../presentation/hub-card)

### Graph
```mermaid
graph TD;
  hub-profile-card --> hub-card
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  calcite-checkbox --> calcite-label
  style hub-profile-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
