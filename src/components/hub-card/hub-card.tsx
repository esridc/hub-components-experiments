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
  @Prop() name: string = "Trash Day";
  @Prop() description: string = "Monday";
  @Prop() contenttype: string = "Local Topic";
  /** Specify the layout of the card */
  @Prop() layout: "horizontal" | "vertical" = "vertical"
  @Prop() url:string = null;
  @Prop() buttonText:string;
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
    let thumbnail = null;
    let details = null;
    
    if(this.image) {
      if(this.item) {
        thumbnail = <img class="hub-content-image" src={`${this.portalUrl}content/items/${this.item}/info/${this.image}`} alt="Thumbnail Image" />
      } else {
        thumbnail = <img class="hub-content-image" src={this.image} alt="Thumbnail Image" />
      }
    }
    if(this.contenttype) {
      output.push( <span class="hub-content-type">{this.contenttype}</span> )
    }
    if(this.name) {
      let name = this.name
      if(this.url) {
        name = `<a class="hub-content-url" href="${this.url}">${name}</a>`
      }
      output.push(<div class="hub-content-title" innerHTML={name}></div>)
    }
    if(this.description) {
      output.push(<p class="hub-content-summary" innerHTML={this.description}></p>)
    }
    if(this.metadata && this.metadata.length > 0) {
      details = 
        <div class="hub-content-details">
          {this.metadata.map((element) =>
            <div><strong>{element.name}</strong>: {element.value}</div>
          )}
        </div>      
  
    }
   
    return (
      <Host>
        <div class={`hub-content-card layout-${this.layout}`} >
          {this.url 
            ? <a class="hub-content-link" href={this.url} ></a> : ""}
          {this.image
            ? thumbnail : "" }
          <div class="hub-content-metadata">
            {output}
            {details}
          </div>
          {(this.buttonText && this.buttonAction) ? 
              <div class="hub-content-footer">
                <hub-button
                  text={this.buttonText}
                  action={this.buttonAction}>
                </hub-button> 
              </div>
              : null
            }

        </div>
      </Host>
    )
  }

}
