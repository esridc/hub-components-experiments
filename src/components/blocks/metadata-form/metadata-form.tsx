import { Component, Element, Host, h, Prop, Listen } from '@stencil/core';

import { sendTelemetry } from '../../../utils/telemetry-utils'

@Component({
  tag: 'metadata-form',
  styleUrl: 'metadata-form.css',
  shadow: true,
})
export class MetadataForm {

  @Element() element: HTMLElement;

  @Prop({ mutable: true }) sections:Array<string> = [];
  @Prop() locale:string = "en";
  @Prop({ mutable: true, reflect: true }) resource:any = null;

  async componentWillLoad() {

    sendTelemetry({
      category: 'hub-component',
      action: 'hub-metadata-form:loaded', 
      label: ''
    });
  }

  // When an element updates and merges into the resource object.
  @Listen('resourceUpdated')
  resourceUpdated(event) {
    console.log("trace metadata-form: resourceUpdated", event.detail)
  }

  render() {
    console.log("MetadataForm: render", this.resource)
    return (
      <Host>
        <slot></slot>
        <calcite-accordion>
        {this.sections.map((section) => 
          <calcite-accordion-item item-title={section} active>
          <metadata-section-view
            spec={section}
            locale={this.locale}
            resource={this.resource}
          ></metadata-section-view>
          </calcite-accordion-item>        
        )}
        </calcite-accordion>
      </Host>
    );
  }
}