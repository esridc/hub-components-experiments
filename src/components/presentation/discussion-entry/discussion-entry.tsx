import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'discussion-entry',
  styleUrl: 'discussion-entry.css',
  shadow: true,
})
export class DiscussionEntry {

  deleteEl: HTMLElement;

  @Prop() annotationId:string; 
  @Prop() authorImage:string; 
  @Prop() authorName:string; 
  @Prop() description:string; 
  @Prop() publishedDate:string;
  @Prop() allowReply:boolean = true;
  // TODO: add edit support
  @Prop() allowEdit:boolean = false;
  @Prop() allowDelete:boolean = false;


  @Event() eventDeleteAnnotation: EventEmitter;

  deleteAnnotation(event) {
    event.preventDefault();
    this.eventDeleteAnnotation.emit(this.annotationId);
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="comment" id={this.annotationId}>
        <div class="avatar"> 
          {this.authorImage ? 
            <img src={this.authorImage} /> 
            : ""
          }
          </div>
          <div class="content">
            <a class="author">{this.authorName}</a>
            <div class="metadata">
              <span class="published-date">{this.publishedDate}</span>
            </div>
            <div class="text">
              {this.description}
            </div>
            <div class="actions">
              { this.allowReply ? 
                <a class="reply">Reply</a>
                : ""
              }
              { this.allowDelete ? 
                <a class="delete" onClick={(event) => this.deleteAnnotation(event)} >Delete</a>
                : ""
              }
              
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
