import { Component, Prop, Element, h, State, Listen, Event, EventEmitter} from '@stencil/core';
import { IResourceObject, getAnnotationServiceUrl, searchAnnotations, addAnnotations, deleteAnnotations } from '@esri/hub-annotations';
import { convertUserToMember, getAnonymousMember } from "../../utils/hub-member"

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

  // Component Events
  @Event() eventAddAnnotation: EventEmitter;

  @Listen('add-annotation')
  handleEvent(e) {
    console.log('Event: add-annotation', e);
    this.addAnnotation(e.details.annotation);
  }

  // Component Methods
  constructor() {
    this.portalUrl = 'https://www.arcgis.com';
    this.authors = {}
    this.searchOptions = {} //author: this.authorSearch};

  }

  componentWillLoad() {

    if(this.search !== null || this.search !== undefined) {
      this.searchOptions.search = this.search;
    }

    if(this.author === null || this.author === undefined) {
      this.author = 'aturner';
    } else {
      this.searchOptions.author = this.author;
    }

    if(this.target === null || this.target === undefined) {
      this.target = "";
    } else {
      this.searchOptions.target = this.target;
    }

    if(this.update) {
      setInterval(() => {
        this.updateAnnotations(this.searchOptions)
      }, 1000)
    }
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
    if(search === undefined || search === null) {
      search = {}
    }

    if(search.author) {
      query.push(`author LIKE '${search.author}'`)
    }
    if(search.target) {
      query.push(`target LIKE '${search.target}'`)
    }
    if(search.search) {
      query.push(search.search)
    }
    console.log("hub-discussion: Search", [search, query, {url: this.annotationsUrl, params: {where: query.join(" AND ")}}])
    return searchAnnotations({url: this.annotationsUrl})//, params: {where: query.join(" AND ")}})
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

  // TODO: change this to a listener and get event detail
  // newComment(event) {
  //   event.preventDefault();
  //   this.addAnnotation({ attributes: {
  //                     author: this.author,
  //                     source: window.location.href,
  //                     target: this.target,
  //                     description: this.messageEl.value
  //                   }});
  // }

  addAnnotation(newAnnotation) {
    return addAnnotations({url: this.annotationsUrl, features: [
        newAnnotation
      ]}).then( (/*response*/) => {
        this.updateAnnotations(this.searchOptions);
        this.eventAddAnnotation.emit(newAnnotation);
        // console.log("addAnnotations", response)
    });
  }

  removeAnnotation(event) {
    console.log("removeAnnotation", [event.target.id, event])
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
            annotationId={"annotation-" + annotation.attributes.OBJECTID}
            authorImage={this.getAuthor(annotation.attributes.Creator).thumbnailUrl}
            authorName={this.getAuthor(annotation.attributes.Creator).name}
            description={annotation.attributes.description}
            publishedDate={this.formatDate(annotation.attributes.created_at)}
            allowReply={this.allowReply}
          >

          </discussion-entry>
        )}
      </div>
    )
    output.push(
      <discussion-input></discussion-input>
    )
    return output;
  }

  render() {
    return this.renderList();
  }
}