import { Component, Host, Prop, h, State } from '@stencil/core';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';

type ContentMetadata = {
  name: string,
  value: string
}

@Component({
  tag: 'hub-card',
  styleUrl: 'hub-card.css',
  shadow: true
})


export class HubCard {

  portalUrl: string = "http://www.arcgis.com/sharing/rest/"
  @Prop({ attribute: 'item' }) item: string = "";
  @Prop() image: string;
  @Prop() name: string;
  @Prop() description: string;
  @Prop() contenttype: string = "Local Topic";
  /** Specify the layout of the card */
  @Prop() layout: "horizontal" | "vertical" = "vertical"
  @Prop() url:string;
  @Prop() buttonText:string = "Explore";
  @Prop() buttonAction:Function;

  // @Prop() content:any;
  
  @State() metadata: Array<ContentMetadata> = []; 

  componentWillRender() {
    // this.metadata = [
    //   {name: "Owner", value: this.content.item.owner},
    //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
    // ]
  }

  render() {
    let output = [];
    // debugger;
    if(this.image !== undefined && this.image !== null && this.image.length > 0) {
      // TODO: improve testing for image URL
      if(this.image.match(/^http/) === null && this.item) {
        output.push (<img class="card-image" slot="thumbnail" src={`${this.portalUrl}content/items/${this.item}/info/${this.image}`} />)
      } else {
        // thumbnail = <img class="hub-content-image" src={this.image} alt="Thumbnail Image" />
        output.push (<img class="card-image" slot="thumbnail" src={this.image} />)
      }
    }

    if(this.name) {
      let name = this.name
      if(this.url) {
        name = `<a class="hub-content-url" href="${this.url}">${name}</a>`
      }
      output.push(<h3 class="card-title" slot="title" innerHTML={name}></h3>)
    }
    if(this.contenttype) {
      output.push(<span class="card-subtitle" slot="subtitle">{this.contenttype}
        </span>)
      // output.push( <span class="hub-content-type">{this.contenttype}</span> )
    }
    if(this.description) {
      // output.push(<p class="hub-content-summary" innerHTML={this.description}></p>)
      output.push(<div class="card-description" innerHTML={this.description}></div>)
    }
    if(this.metadata && this.metadata.length > 0) {
      output.push( 
        <div class="hub-content-details">
          {this.metadata.map((element) =>
            <div><strong>{element.name}</strong>: {element.value}</div>
          )}
        </div>      
      )
    }

    if(this.url !== undefined && this.url !== null && this.url.length != 0) {
      output.push(<calcite-button onClick={() => window.open(this.url)} slot="footer-leading" width="full">{this.buttonText}</calcite-button>)
    }
   
    return (
      <Host>
      <calcite-card>
        {output}
      </calcite-card>
      </Host>
    )
  }

}
