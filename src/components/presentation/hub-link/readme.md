# hub-link

Prototype of embedding links that can be evented or hard links (open in browser).

To use evented links, either set `evented=true` or embed the component in an element with `data-framework="true"`.

## Hard Link

`<hub-link evented=false link="https://hub.arcgis.com" >View Hub</hub-link>`

## Evented Links

Explicit:
`<hub-link evented=true link="https://hub.arcgis.com" >View Hub</hub-link>`

Implicit:

```html
<body data-framework="true"> 
  <p> 
    Visit the <hub-link link="https://opendata.dc.gov/datasets/urban-forestry-street-trees" >trees dataset</hub-link>
  </p>
</body>
```

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                | Type      | Default                |
| --------- | --------- | -------------------------- | --------- | ---------------------- |
| `evented` | `evented` | If true, links send events | `boolean` | `false`                |
| `link`    | `link`    | Link to display            | `string`  | `"https://google.com"` |


## Events

| Event         | Description                                    | Type                  |
| ------------- | ---------------------------------------------- | --------------------- |
| `linkClicked` | Event sent when relative=true and link clicked | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
