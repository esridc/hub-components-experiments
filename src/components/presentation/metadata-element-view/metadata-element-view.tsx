import { Component, Host, h, Prop } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'metadata-element-view',
  styleUrl: 'metadata-element-view.css',
  shadow: true,
})
export class MetadataElementView {

  metadataEl: HTMLInputElement; 

  @Prop() title:string = "Input: Title";
  @Prop() required:boolean = false;
  @Prop() type:"number" | "text" | "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "password" | "search" | "tel" | "textarea" | "time" | "url" | "week" = "text";
  @Prop() subtype:string = null;
  @Prop() id:string = "title";
  @Prop() value:string = "";
  @Prop() description:string = "";

  private requiredStatus():string {
    return this.required ? "metadata-required" : "metadata-optional";
  }

  metadataEditors = {
    "geography": { component: "hub-places-map" },
    "topics": { component: "hub-topic-picker" }
  };

  private getMetadataEditor(editorType:string) {
    return this.metadataEditors[editorType];
  }

  renderEditor(elementType: string, elementSubType: string) {
    console.log("renderEditor", elementType, this.getMetadataEditor(elementSubType))
    if(!!elementSubType) {
      const editorType = this.getMetadataEditor(elementSubType);
      const someHtml = `<${editorType.component}></${editorType.component}>`;

      return (<div class="map" innerHTML={someHtml}></div>)

    } else {
      return (
          <calcite-input 
            required={ this.required}
            // ref={(el: HTMLInputElement) => this.metadataEl = el} 
            id={this.id}
            type={this.type}
            // name={this.id}
            class={ this.requiredStatus()} 
            value={this.value}
          ></calcite-input>
      )
    }    
  }


  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-label 
          status="valid"
          >
          {this.title}
        {this.renderEditor(this.type, this.subtype)}
        <calcite-input-message active>{this.description}</calcite-input-message>
        </calcite-label>

        {/* <label class={ this.requiredStatus() }>{this.title}</label>
        <input type={this.type} ref={(el: HTMLInputElement) => this.metadataEl = el} id={this.id} name={this.id} class={ this.requiredStatus()} value={this.value} />
         */}
        {/* <label class="metadata-required">Summary</label>
        <textarea ref={(el: HTMLTextAreaElement) => this.summaryEl = el} id="summary" name="summary">
          {this.summary}
        </textarea>
        */}
      </Host>
    );
  }

}
