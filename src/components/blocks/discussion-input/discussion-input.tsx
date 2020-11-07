import { Component, Event, EventEmitter, Host, h, Prop, State } from '@stencil/core';
import * as HubTypes from '../../../utils/hub-types'
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import { getMember } from '../../../utils/hub-member';
import { addAnnotations } from '@esri/hub-annotations';

@Component({
  tag: 'discussion-input',
  styleUrl: 'discussion-input.css',
  shadow: true,
})
export class DiscussionInput {
  inputEl: HTMLTextAreaElement;
  errorEl: HTMLCalciteAlertElement;

  /**
   * Optional placeholder text for the input text area
   */
  @Prop() placeholder:string = "Join the discussion...";
  
  /**
   * Button string message
   */
  @Prop() submit:string = "Share comment"

  /**
   * URI of the comment subject (e.g. item:4ef, item:4ef:feature:42:attribute:width)
   */
  @Prop() target:string;
  
  /**
   * URL to this Hub's annotation service
   * TODO: extract this implementation detail
   */
  @Prop() annotationsUrl: string;

  /**
   * Show author any errors when saving annotation
   */
  @State() error: string;
  @State() member: HubTypes.IHubMember; 
  @State() auth: UserSession = null;

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  /**
   * Event emitted when a comment is successfully commited
   */
  @Event() eventAddAnnotation: EventEmitter;


  async componentWillLoad() {
    // TODO: fix case where cookie isn't available.
    this.session = readSessionFromCookie();

    console.log("Session", this.session)
    if(this.session !== undefined) {
      this.auth = UserSession.deserialize(this.session);
      this.member = await getMember( JSON.parse(this.session).username, this.auth )
    }
  }
  // Component Events
  
  private submitAnnotation(event) {
    this.error = null;

    event.preventDefault();
    
    // Don't submit empty content
    if(this.inputEl.value.length === 0 ) {
      return;
    }

    let annotation = {
      content: this.inputEl.value,
      target: this.target,
      author: this.member.username,
      createdDate: new Date()
    }
    this.commitAnnotation( annotation )
  }
  private clearAnnotation() {
    this.inputEl.value = "";
  }

  // Move this into @esri/hub-annotations
  async commitAnnotation(newAnnotation: HubTypes.IHubAnnotation) {
    let feature = {
      attributes: {
        target: newAnnotation.target,
        description: newAnnotation.content,
        created_at: newAnnotation.createdDate.getTime(),
        updated_at: newAnnotation.createdDate.getTime(),
//        source: window.location, // TODO: determine potentially better annotation source
        ...newAnnotation
      },
      geometry: newAnnotation.geometry
    }
    let response = await addAnnotations({
        url: this.annotationsUrl, 
        features: [ feature ],
        authentication: this.auth
    })

    if(!!response && response.addResults[0].success ) { // TODO: Check response 
      this.eventAddAnnotation.emit({ newAnnotation });
      this.clearAnnotation();
    } else {
      this.errorEl.active = true;
      // TODO: Using actual error for debugging; Change to a better public facing message for production
      this.error = response.addResults[0]['error'].description
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="annotation-entry">
          <textarea placeholder={this.placeholder} ref={(el: HTMLTextAreaElement) => this.inputEl = el} />
          <br />
          <calcite-button 
            onClick={(event) => this.submitAnnotation(event)}
          >
            {this.submit}
          </calcite-button>
          
          <calcite-alert ref={(el: HTMLCalciteAlertElement) => this.errorEl = el}
            autoDismiss={true}
            color="red"
            scale="s"
          >
            <div slot="alert-title">There was a problem adding your comment.</div>
            <div slot="alert-message">
              {this.error}
            </div>
          </calcite-alert>
        
        </div>
      </Host>
    );
  }
}