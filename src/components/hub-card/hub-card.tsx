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
    // let thumbnail = null;
    let details = null;
    
    if(this.image) {
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
      details = 
        <div class="hub-content-details">
          {this.metadata.map((element) =>
            <div><strong>{element.name}</strong>: {element.value}</div>
          )}
        </div>      
  
    }
   
    return (
      <Host>
      <calcite-card
      >
        {output}
        {details}
        <calcite-button onClick={() => window.open(this.url)} slot="footer-leading" width="full">{this.buttonText}</calcite-button>

        {/* <calcite-button slot="footer-leading" color="light" scale="s" icon='circle'></calcite-button>
        <div slot="footer-trailing">
          <calcite-button scale="s" color="light" id="card-icon-test-2" icon='circle'></calcite-button>
          <calcite-button scale="s" color="light" id="card-icon-test-1" icon='circle'></calcite-button>
          <calcite-dropdown>
            <calcite-button id="card-icon-test-5" slot="dropdown-trigger" scale="s" color="light" icon='circle'></calcite-button>
            <calcite-dropdown-group selection-mode="none">
              <calcite-dropdown-item>View details</calcite-dropdown-item>
              <calcite-dropdown-item>Duplicate</calcite-dropdown-item>
              <calcite-dropdown-item>Delete</calcite-dropdown-item>
            </calcite-dropdown-group>
          </calcite-dropdown>
        </div> */}
      </calcite-card>
    
        {/* <div class={`hub-content-card layout-${this.layout}`} >
          {this.url 
            ? <a class="hub-content-link" href={this.url} ></a> : ""}
          {this.image
            ? thumbnail : "" }
          <div class="hub-content-metadata">
            {output}
            {details}
          </div>
          {(this.buttonText) ? 
              <div class="hub-content-footer">
                <hub-button
                  text={this.buttonText}
                  action={this.buttonAction}>
                </hub-button> 
              </div>
              : null
            }

        </div> */}
      </Host>
    )
  }

}
