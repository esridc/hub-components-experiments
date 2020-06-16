# hub-search



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description                                      | Type                         | Default                    |
| ------------------- | ------------------- | ------------------------------------------------ | ---------------------------- | -------------------------- |
| `buttontext`        | `buttontext`        | Text to show in the button                       | `string`                     | `"Explore"`                |
| `clientid`          | `clientid`          |                                                  | `string`                     | `"WXC842NRBVB6NZ2r"`       |
| `groups`            | `groups`            | Groups to limit search                           | `string`                     | `undefined`                |
| `hubapi`            | `hubapi`            | Use the Hub API (true) or the Portal API (false) | `boolean`                    | `true`                     |
| `layout`            | `layout`            | Hub site URL to scope for search                 | `"horizontal" \| "vertical"` | `"horizontal"`             |
| `limit`             | `limit`             | Maximum number of results to return              | `number`                     | `12`                       |
| `portal`            | `portal`            |                                                  | `string`                     | `"https://www.arcgis.com"` |
| `query`             | `query`             | Default Query                                    | `string`                     | `""`                       |
| `searchbutton`      | `searchbutton`      | Search Button text                               | `string`                     | `"Start Search"`           |
| `searchplaceholder` | `searchplaceholder` | Search placeholder text                          | `string`                     | `"Search for content"`     |
| `showsearch`        | `showsearch`        | Choose to show or hide search                    | `boolean`                    | `true`                     |
| `site`              | `site`              | Hub site URL to scope for search                 | `string`                     | `""`                       |
| `sort`              | `sort`              | Default sort order                               | `"modified" \| "name"`       | `"name"`                   |


## Dependencies

### Depends on

- [hub-card](../hub-card)
- [hub-suggest-input](../hub-suggest-input)
- [hub-filter-category](../hub-filter-category)

### Graph
```mermaid
graph TD;
  hub-gallery --> hub-card
  hub-gallery --> hub-suggest-input
  hub-gallery --> hub-filter-category
  hub-card --> calcite-button
  hub-card --> calcite-card
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  hub-suggest-input --> calcite-button
  hub-filter-category --> calcite-checkbox
  hub-filter-category --> calcite-tree
  hub-filter-category --> calcite-tree-item
  calcite-tree-item --> calcite-icon
  style hub-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
