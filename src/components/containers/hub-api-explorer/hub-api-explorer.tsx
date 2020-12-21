import { Component, Host, h, State, Prop } from '@stencil/core';
import * as Metadata from '../../../utils/metadata-utils'
import { adlib }  from 'adlib'

@Component({
  tag: 'hub-api-explorer',
  styleUrl: 'hub-api-explorer.css',
  shadow: true,
})
export class HubApiExplorer {

  @Prop({}) item:string = "4ef";
  @Prop({}) url:string = "https://server.example.com/FeatureServer/0";
  @Prop({ mutable:true }) format: "python"|"javascript"|"http" = "python";
  @State() example:string = "";

  resource:any = {
    query: {
      where: "1=1"
    }
  }

  schema:any = {
    query: {
      "id": "query.json#",
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Attribute Filters",
      "description": "You can filter for data using advanced attribute queries.",
      "type": "object",
      "example": "../examples/query.json",
      "required": ["where"],
      "additionalProperties": true,
      "properties": {
        "where": {
          "type": "string",
          "description": "SQL query",
          "pattern": "^(.*){50}$"
        }
      }
    },
    spatial: {
      "id": "spatial.json#",
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Spatial Filters",
      "description": "You can optionally filter data by a polygon, or buffer and distance",
      "type": "object",
      "example": "../examples/query.json",
      "required": [],
      "additionalProperties": true,
      "properties": {
        "geometry": {
          "title": "Geometry",
          "type": "string",
          "description": "The geometry to apply as the spatial filter.",
          "pattern": "^(.*){50}$"
          
        },
        "geometryType": {
          "title": "Geometry Type",
          "type": "string",
          "description": "The type of geometry specified by the geometry parameter.",
          "pattern": "^(.*){50}$"
        },
        "spatialReference": {
          "title": "Input Spatial Reference",
          "type": "string",
          "description": "The spatial reference of the input geometry.",
          "pattern": "^(.*){50}$"
        },
        "spatialRelationship": {
          "title": "Spatial Relationship",  
          "type": "string",
          "description": "The spatial relationship to be applied on the input geometry while performing the query.",
          "pattern": "^(.*){50}$"
        }
      }
    },
    output: {
      "id": "output.json#",
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Output Options",
      "description": "You can choose what to return in the output.",
      "type": "object",
      "example": "../examples/query.json",
      "required": ["title"],
      "additionalProperties": true,
      "properties": {
        "returnGeometry": {
          "title": "Return Geometry",
          "type": "string",
          "description": "If true, the result includes the geometry associated with each feature returned.",
          "pattern": "^(.*){50}$"
        }
      }
    }
  };

  async componentWillLoad() {
    this.example = await this.generateExample(this.format, {id: this.item});
  }

  private async generateExample(format: string, item: object):Promise<string> {
    const _file = `./examples/${format}.json`;
    var _template:string = await Metadata.getMetadataSpec(_file);
    
    const _interp = adlib(_template, { item });
    const _output:string = _interp.text.join("\r\n");
    return _output;
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <div class="queryBuilder">
          <h3>Build a Query</h3>
          <metadata-section-view locale="en" resource={this.resource.query} schema={this.schema.query}></metadata-section-view>
          <metadata-section-view locale="en" schema={this.schema.spatial}></metadata-section-view>
          <metadata-section-view locale="en" schema={this.schema.output}></metadata-section-view>
        </div>

        <div class="codeExamples">
          <h3>Code Examples</h3>
          <calcite-tabs>
            <calcite-tab-nav slot="tab-nav">
              <calcite-tab-title active>Python</calcite-tab-title>
              <calcite-tab-title>Javascript</calcite-tab-title>
              <calcite-tab-title>HTTP</calcite-tab-title>
            </calcite-tab-nav>

            <calcite-tab active><pre><code>{this.example}</code></pre></calcite-tab>
            <calcite-tab>Javascript Example</calcite-tab>
            <calcite-tab>HTTP Example</calcite-tab>
          </calcite-tabs>
        </div>

      </Host>
    );
  }

}
