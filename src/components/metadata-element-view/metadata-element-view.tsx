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
  @Prop() type:string = "text";
  @Prop() id:string = "title";
  @Prop() value:string = "";
  @Prop() description:string = "";

  private requiredStatus():string {
    return this.required ? "metadata-required" : "metadata-optional";
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-label status="valid">
          {this.title}
          <calcite-input 
            // ref={(el: HTMLInputElement) => this.metadataEl = el} 
            id={this.id} 
            class={ this.requiredStatus()} value={this.value}
          ></calcite-input>
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
