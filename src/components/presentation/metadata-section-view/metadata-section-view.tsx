import { Component, Element, Event, EventEmitter, Host, h, Listen, Prop, State } from '@stencil/core';
import '@esri/calcite-components';
import { IHubResource } from '../../../utils/hub-api';
import * as Metadata from '../../../utils/metadata-utils'
import * as Locale from '../../../utils/locale'

@Component({
  tag: 'metadata-section-view',
  styleUrl: 'metadata-section-view.css',
  shadow: true,
})
export class MetadataSectionView {
  @Element() element: HTMLElement;

  @Prop() spec:string = "arcgis";
  @Prop({ mutable: true }) elementTitle: string = "";
  @Prop({ mutable: true }) description: string = "";
  @Prop() locale:string = "en";


  /**
   * JSON Schema Properties section
   */
  @Prop() inputs: Array<any> = [];

  /**
   * Hub Resource object. 
   */
  @Prop({ mutable:true, reflect:true }) resource: IHubResource = null;

  /**
   * Which translator to use from the schema definition
   */
  @Prop() translator:string = "arcgis";

  @Event() resourceUpdated: EventEmitter;

  @State() strings: any; 
  @State() sectionSchema: any; 

  async componentWillLoad() {
    this.sectionSchema = await this.loadSpecification();
    this.locale = this.locale || Locale.getComponentClosestLanguage(this.element);

    this.elementTitle = this.sectionSchema['title'];
    this.description = this.sectionSchema['description'];
    this.inputs = this.sectionSchema['properties'];

    // TODO: send input translation down to components / per input
    Locale.getMetadataLocaleStrings(this.spec, this.locale).then((result) => {
      this.strings = result;
      this.elementTitle = this.strings.t(`${this.spec}.metadata.${this.spec}.title`)
      this.description = this.strings.t(`${this.spec}.metadata.${this.spec}.description`)
    })

  }

  private async loadSpecification() {
    const file = `./schema/${this.spec}.json`
    return await Metadata.getMetadataSpec(file);
  }

  // TODO: use `schema.translation` to get correct metadata element, e.g. `summer = item.snippet`
  private metadataValue(attr :string) :string {
    let value = "";
    console.log("metadata-section-view: metadataValue", attr  , this.resource)
    if(!!this.resource) {
      // value = this.resource[attr];
      console.log("metadata-section-view: metadataValue - translation", attr, attr.split('.'))
      value = attr.split('.').reduce((o,i)=>o[i], this.resource); 
    }
    console.log("metadata-section-view: metadataValue", attr, value, this.resource)
    return value;
  }

  @Listen('elementUpdated')
  elementUpdatedHandler(event: CustomEvent<any>) {
    console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
    
    // Merge the element property update into the resource, then send up...
    this.resource = Object.assign(this.resource, event.detail)
    console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
    this.resourceUpdated.emit(this.resource);
  }
  
  render() {
    console.log("metadata-section-view: inputs", [this.elementTitle, this.inputs]);
    return (
      <Host>
        <slot></slot>
        <section class="metadata-section">
          <metadata-section-help elementTitle={this.elementTitle} description={this.description} ></metadata-section-help>
          <div class="metadata-section-input">
            {Object.keys(this.inputs).map((attr) =>
              <metadata-element-view 
                elementTitle={attr}
                schema={this.inputs[attr]}
                type={this.inputs[attr].type}
                subtype={this.inputs[attr].subtype || null}
                description={this.inputs[attr].description} 
                value={this.metadataValue(this.inputs[attr].translation[this.translator][0])}
                required={true}></metadata-element-view>
            )}
          </div>
        </section>
      </Host>
    );
  }

}
