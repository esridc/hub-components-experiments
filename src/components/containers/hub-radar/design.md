# Design

Radar is designed to be a simple way for people to explore information near them. It is configured by creating a webmap where each layer is a 'topic'. When the user enters their address or location, this is geocoded to a latitude + longitude and then each layer is queried at that location. 

## Building a Webmap

To create a webmap, use the [ArcGIS Online webmap editor](https://arcgis.com/home/webmap/viewer.html?useExisting=1). Anyone can create an account for free to build and save webmaps. 

When you add a polygon layer with areas then Radar does a "point in polygon" to return the first feature.

When you add a point or line layer, then you need to add `Nearby <distance>` where the `<distance>` is a numberic value in meters. So for example `Crime Nearby 50` would find the first feature within 50 meters of the address location.

See the [DC example webmap](https://arcgis.com/home/webmap/viewer.html?webmap=2e725f2d5b7640b28121af931048894c)