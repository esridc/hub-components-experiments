import { Component, Host, h, Prop } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'metadata-section-view',
  styleUrl: 'metadata-section-view.css',
  shadow: true,
})
export class MetadataSectionView {

  @Prop() title: string = "";
  @Prop() description: string = "";
  @Prop() inputs: Array<any> = [];

  render() {
    console.log("metadata-section-view: inputs", this.inputs)
    return (
      <Host>
        <slot></slot>
        <section class="metadata-section">
          <metadata-section-help title={this.title} description={this.description} ></metadata-section-help>
          <div class="metadata-section-input">
            {Object.keys(this.inputs).map((attr) => 
              <metadata-element-view 
                title={attr} 
                type={this.inputs[attr].type} 
                description={this.inputs[attr].description} 
                value="" 
                required={true}></metadata-element-view>
            )}
          </div>
        </section>
      </Host>
    );
  }

}
