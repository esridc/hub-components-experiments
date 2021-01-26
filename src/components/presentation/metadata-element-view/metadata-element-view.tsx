import { Component, Event, EventEmitter, Listen, Host, h, Prop } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'metadata-element-view',
  styleUrl: 'metadata-element-view.css',
  shadow: true,
})
export class MetadataElementView {

  metadataEl: HTMLCalciteInputElement; 

  @Prop() elementTitle:string = "Input: Title";
  @Prop() required:boolean = false;
  
  /**
   * Currently based on calcite-components input
   */
  @Prop() type:"number" | "text" | "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "password" | "search" | "tel" | "textarea" | "time" | "url" | "week" = "text";

  /**
   * JSON schema definition for a specific metadata property
   * see https://json-schema.org/understanding-json-schema/basics.html
   */
  @Prop() schema:object;

  /**
   * Which translator to use from the schema definition
   */
  @Prop() translator:string = "arcgis";

  /**
   * Subtype is used to override the metadata editor for this element
   * e.g. `geography` or `topics` show specific editors
   */
  @Prop() subtype:string = null;
  @Prop() elementId:string = "title";
  @Prop() value:string = "";
  @Prop() description:string = "";

  @Event() elementUpdated:EventEmitter;

  private requiredStatus():string {
    return this.required ? "metadata-required" : "metadata-optional";
  }

  metadataEditors = {
    "geography": { component: "hub-geography-picker" },
    "topics": { component: "hub-topic-picker" },
    "license": { component: "hub-license-picker" }
  };

  private getMetadataEditor(editorType:string) {
    return this.metadataEditors[editorType];
  }

  @Listen('editorUpdated')
  editorUpdatedHandler(event: CustomEvent<any>) {
    const address = this.schema['translation'][this.translator][0]
    const metadataObj = {};
    metadataObj[address] = event.detail;
    console.log("metadata-element-view: elementUpdatedHandler", metadataObj)

    this.elementUpdated.emit(metadataObj)        
  }

  onInput() {
    const address = this.schema['translation'][this.translator][0]
    const metadataObj = {};
    metadataObj[address] = this.metadataEl.value;
    console.log("metadata-element-view: onInput", metadataObj)

    this.elementUpdated.emit(metadataObj)
  }

  renderEditor(elementType: string, elementSubType: string) {
    console.log("renderEditor", elementType, this.getMetadataEditor(elementSubType))
    if(!!elementSubType) {
      const editorType = this.getMetadataEditor(elementSubType);
      // TODO: handle different types, such as array parse, date new, etc.
    const editorComponent = `<${editorType.component} options="${this.schema['items']?.enum}" values="${this.value}"></${editorType.component}>`;

      return (<div class={elementSubType} innerHTML={editorComponent}></div>)
    } else {
      return (
          <calcite-input
            onInput={(_event) => this.onInput()} 
            required={ this.required}
            ref={(el: HTMLCalciteInputElement) => this.metadataEl = el} 
            id={this.elementId}
            type={this.type}
            // name={this.id}
            class={this.requiredStatus()} 
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
          {this.elementTitle}
        </calcite-label>
        {this.renderEditor(this.type, this.subtype)}
        <calcite-input-message active>{this.description}</calcite-input-message>
        

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
