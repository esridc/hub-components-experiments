import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { getItem, IItem } from "@esri/arcgis-rest-portal";

@Component({
  tag: 'hub-content-card',
  styleUrl: 'hub-content-card.css',
  shadow: true
})
export class HubContentCard {

  @Prop() content:string = "4f5c78bfe89a4304aec3a6cfd492d0cd";
  @Prop() layout: "horizontal" | "vertical" = "vertical";
  
  @Prop({ mutable: true }) contentItem: IItem = null; 

  @Prop() actionButton; 

  @Element() host: HTMLDivElement;
  @State() children: Array<any> = [];

  componentWillLoad() {
    if(this.contentItem === null) {
      getItem(this.content).then(item => {
        this.contentItem = item;
      })
    }
  }

  render() {
    let output = [];

    if(this.contentItem) {
      output.push( 
        <hub-card 
          item={this.content}
          contenttype={this.contentItem.type}
          layout={this.layout}
          url={this.contentItem.url}
          image={this.contentItem.thumbnail} 
          name={this.contentItem.title} 
          description={this.contentItem.snippet}
          // content={this.content}
        >
        </hub-card> 
      )
    }
    return (
      <Host>
        {output}
      </Host>
    );
  }

}
