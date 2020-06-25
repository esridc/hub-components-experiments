import { Component, Host, h, Prop, Element, State, Watch } from '@stencil/core';
import * as HubContent from "../../utils/hub-content"
import * as HubTypes from "../../utils/hub-types"

@Component({
  tag: 'hub-content-card',
  styleUrl: 'hub-content-card.css',
  shadow: true
})
export class HubContentCard {

  @Prop() content:string = "4f5c78bfe89a4304aec3a6cfd492d0cd";
  @Prop() layout: "horizontal" | "vertical" = "vertical";
  
  @Prop({ mutable: true }) contentItem: HubTypes.IHubContent = null; 

  @Prop() actionButton; 

  @Element() host: HTMLDivElement;
  @State() children: Array<any> = [];

  componentWillLoad() {
    this.loadContent();
  }

  @Watch('content')
  loadContent() {
    if(this.contentItem === null) {
      HubContent.getContent(this.content).then(contentResponse => {
        console.log("HubContentCard content", contentResponse)
        this.contentItem = contentResponse;
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
          image={this.contentItem.thumbnailUrl} 
          name={this.contentItem.name} 
          description={this.contentItem.summary}
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
