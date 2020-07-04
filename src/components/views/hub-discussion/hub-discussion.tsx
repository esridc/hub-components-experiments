import { Component, Prop, Element, h, State, Listen, Event, EventEmitter} from '@stencil/core';
import { IResourceObject, getAnnotationServiceUrl, searchAnnotations, deleteAnnotations } from '@esri/hub-annotations';
import { convertUserToMember, getAnonymousMember } from "../../../utils/hub-member"
import * as HubTypes from '../../../utils/hub-types'
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';

@Component({
  tag: 'hub-discussion',
  styleUrl: 'hub-discussion.css',
  shadow: true,
})
export class HubDiscussion {

  @Element() el: HTMLElement;
  @Prop() allowReply:boolean = true;

  @Prop() org: string;
  @Prop({ mutable: true }) target: string;
  @Prop({ mutable: true }) author: string;
  @Prop() search: string;
  @Prop({ mutable: true }) portalUrl: string;
  @Prop({ mutable: true }) annotationsUrl: string;
  @Prop() update: boolean; // Automatic updates
  @State() annotations: IResourceObject[]
  @State() authors: any;
  @State() annotationDescription: string;
  @State() searchOptions: any;

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;
  @State() username: string;

  // Component Events
  @Event() newResponse: EventEmitter;

  @Listen('eventAddAnnotation')
  eventAddAnnotation(e) {
    console.log('Event: eventAddAnnotation', e);
    this.addAnnotation(e.detail.annotation);
  }

  addAnnotation(newAnnotation: HubTypes.IHubAnnotation) {
    this.updateAnnotations(this.searchOptions);
    this.newResponse.emit(newAnnotation);
  }

  
  // Component Methods
  constructor() {
    this.portalUrl = 'https://www.arcgis.com';
    this.authors = {}
    this.searchOptions = {} //author: this.authorSearch};
  }

  componentWillLoad() {
    this.session = readSessionFromCookie();
    if(!!this.session) {
     this.username = JSON.parse(this.session).username;
    }

    if(!!this.search) {
      this.searchOptions.search = this.search;
    }

    // if(this.author === null || this.author === undefined) {
    //   this.author = 'aturner';
    // } else {
    //   this.searchOptions.author = this.author;
    // }

    if(this.target === null || this.target === undefined) {
      this.target = "";
    } else {
      this.searchOptions.target = this.target;
    }

    // if(this.update) {
    //   setInterval(() => {
    //     this.updateAnnotations(this.searchOptions)
    //   }, 1000)
    // }
    return getAnnotationServiceUrl(this.org).then( annotationsUrl => {
      this.annotationsUrl = annotationsUrl + '/0';
      return this.updateAnnotations(this.searchOptions);
    });
  }

  // Retrieve annotations from service and create combined list
  updateAnnotations(options) {
    return this.getAnnotations(options).then(response => {
      // console.log("Annotations", response)
      this.annotations = response.data;

      // Append the authors index
      for (let i:number =0 ;i< response.included.length;i++) {
        if(this.authors[response.included[i].id] === undefined) {
          this.authors[response.included[i].id] = response.included[i].attributes;
        }
      }
    })
  }

  deleteAnnotation(annotationId) {
    console.log("deleteAnnotations", annotationId);
    deleteAnnotations({url: this.annotationsUrl, objectIds: [ annotationId ] })
    .then( response => {
        console.log("deleteAnnotations", response);
        return this.updateAnnotations(this.searchOptions);
    });
  }
  getAnnotations(search) {
    let query = ["1=1"];

    if(!search) {
      search = {}
    }

    if(!!search.author) {
      query.push(`author LIKE '${search.author}'`)
    }
    if(!!search.target) {
      query.push(`target LIKE '${search.target}'`)
    }
    // if(!!search.search) {
    //   query.push(search.search)
    // }
    console.log("hub-discussion: Search", [search, query, {url: this.annotationsUrl, params: {where: query.join(" AND ")}}])
    return searchAnnotations({url: this.annotationsUrl, where: query.join(" AND ")})
  }

  searchChanged(event) {
    this.searchOptions.author = event.target.value;
    return this.updateAnnotations(this.searchOptions);
  }

  getElementById(id) {
    // "annotation-header"
    for (let i:number =0 ;i< this.el.childElementCount;i++) {
      let elId = this.el.children[i].getAttribute('id');
      if(elId == id) {
        return this.el.children[i];
      }
    }
    return null;
  }

  @Listen('eventDeleteAnnotation')
  async removeAnnotation(event) {
    console.log("removeAnnotation", [event.target.id, event])
    
    const annotationId = event.detail;
    let response = await deleteAnnotations({
        url: this.annotationsUrl, 
        objectIds: [ annotationId ],
        authentication: UserSession.deserialize(this.session)
    })

    console.debug("hub-discussion: removeAnnotation response", response);
    this.updateAnnotations(this.searchOptions);
  }

  getAuthor(username) {
    // if(this.authors[username] === undefined) {
    //   let member = await getMember(username);
    //   this.authors[username] = member;
    // }
    console.log("getAuthor 1", [username, this.authors[username]])
    if(username.length === 0) {
      return this.authors[username] || getAnonymousMember();
    }
    console.log("getAuthor 2", [username, convertUserToMember(this.authors[username])])
    return convertUserToMember(this.authors[username]);
  }
  private formatDate(date) {
    return new Date(date).toLocaleString();
  }

  // TODO: Move discussion card to component
  discussionCard(annotation) {
    return (
    <calcite-card
      class="gallery-card"
      selectable={true}
      >
    <img class="card-image" slot="thumbnail"  />
    <h3 slot="title">
      <img src={this.getAuthor(annotation.attributes.Creator).thumbnailUrl} />
      {this.getAuthor(annotation.attributes.Creator).name}
    </h3>
    <span slot="subtitle">
      
    </span>
      {annotation.attributes.description}
      <span slot="footer-leading">
        {this.formatDate(annotation.attributes.created_at)}
      </span>
    </calcite-card>)    
  }

  renderGallery() {
    let output = []
    this.annotations.map((annotation) => {
      output.push(this.discussionCard(annotation))
    });

    return (<div class="search-results gallery-lg ">
    {output}
    </div>);
  }

  // TODO: Refactor into smaller components
  renderList() {
    let output = []
    let headerEl = this.getElementById("annotation-header");
    var header = "Comments"
    if(headerEl !== null) {
      header = headerEl.innerHTML; //output.push(<div innerHTML={header.innerHTML}></div>);
    }

    output.push(
      <div class="headind_srch">
        <div class="recent_heading">
          <h4 innerHTML={header}></h4>
        </div>
        <div class="srch_bar">
          <div class="stylish-input-group">
            <input type="text" class="search-bar"  placeholder="Search" onChange={(event: UIEvent) => this.searchChanged(event)}></input>
            <span class="input-group-addon">
            <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
            </span>
          </div>
        </div>
      </div>
    )

    //https://ptetutorials.com/images/user-profile.png
    output.push(
      <div class="discussion-list">
        {this.annotations.map((annotation) =>
          <discussion-entry 
            annotationId={annotation.attributes.OBJECTID}
            authorImage={this.getAuthor(annotation.attributes.Creator).thumbnailUrl}
            authorName={this.getAuthor(annotation.attributes.Creator).name}
            description={annotation.attributes.description}
            publishedDate={this.formatDate(annotation.attributes.created_at)}
            allowReply={this.allowReply && (annotation.attributes.Creator !== this.username)}
            allowDelete={annotation.attributes.Creator === this.username}
            allowEdit={annotation.attributes.Creator === this.username}
          >

          </discussion-entry>
        )}
      </div>
    )
    if(!!this.username) {
      output.push(
        <discussion-input 
          target={this.target}
          annotationsUrl={this.annotationsUrl}
        ></discussion-input>
      )
    }

    return output;
  }

  render() {
    return this.renderList();
  }
}