import { Component, Host, h, Prop, State } from '@stencil/core';
import * as Metadata from '../../utils/metadata-utils'

@Component({
  tag: 'metadata-form',
  styleUrl: 'metadata-form.css',
  shadow: true,
})
export class MetadataForm {

  @Prop() specUrl:string = "/schema/contact.json"

  @State() sections: Array<any> = [];

  componentDidLoad() {
    console.log('Component has been rendered');
    this.loadSpecification();
  }

  private async loadSpecification() {
    this.sections = await Metadata.getMetadataSpec(this.specUrl);
    console.log("metadata-form: sections", this.sections)
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <metadata-section-view
          title={this.sections['title']}
          description={this.sections['description']}
          inputs={this.sections['properties']}
        ></metadata-section-view>
      </Host>
    );
  }

}
