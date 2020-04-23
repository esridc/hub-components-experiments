import { Component, Host, h, Prop} from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as Portal from "@esri/arcgis-rest-portal";
import { readSessionFromCookie } from '../../utils/utils';

@Component({
  tag: 'hub-metadata-editor',
  styleUrl: 'hub-metadata-editor.css',
  shadow: true
})
export class HubMetadataEditor {

  @Prop({ mutable: true }) item:string = "1467319d449c44548bd63217f9b3c45a";
  @Prop({ mutable: true }) itemTitle:string;
  @Prop({ mutable: true }) tags:Array<string> = [];
  @Prop({ mutable: true }) summary:string;

  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop() portal = "https://www.arcgis.com";
  @Prop({ mutable: true }) session: string;

  titleEl: HTMLInputElement; 
  tagsEl: HTMLInputElement; 
  summaryEl: HTMLTextAreaElement; 

  componentWillLoad() {
    this.session = readSessionFromCookie()
    this.getItem(this.item).then((response) => {
      console.log("HubMetadata componentDidLoad", response)
      this.itemTitle = response.title;
      this.tags = response.tags;
      this.summary = response.snippet;
    })
  }

  private getItem(itemId) {
    console.log("HubMetadata getItem", [itemId, this.session])
    const authentication = UserSession.deserialize(this.session);
    return Portal.getItem(itemId, { authentication })
  }

  onSave(e) {
    e.preventDefault()
    e.stopPropagation()

    const authentication = UserSession.deserialize(this.session);
    Portal.updateItem({
      item: {
        id: this.item,
        title: this.titleEl.value,
        tags: this.tagsEl.value,
        snippet: this.summaryEl.value
      },
      authentication
    })
  }
  render() {
    return (
      <Host>
        <form onSubmit={(e) => this.onSave(e)}> 
        <section class="metadata-section">
            <div class="metadata-section-help">
                <h3>Basic Info</h3>
                <p>This information is used in search results, gallery cards and on the details views.</p>
                <p>Setting category and update frequency helps others identify, filter, and sort by relevance.</p>
                <p><a href={`${this.portal}/home/item.html?id=${this.item}`}>View in Online</a></p>
            </div>
            <div class="metadata-section-input">
                <label class="metadata-required">Title</label>
                <input type="text" ref={(el: HTMLInputElement) => this.titleEl = el} id="title" name="title" class="metadata-required" value={this.itemTitle} />
                <br />

                <label class="metadata-required">Tags</label>
                <input type="text" ref={(el: HTMLInputElement) => this.tagsEl = el} id="tags" name="tags" class="metadata-required" value={this.tags.join(',')} />
                <br />

                <label class="metadata-required">Summary</label>
                <textarea ref={(el: HTMLTextAreaElement) => this.summaryEl = el} id="summary" name="summary">
                  {this.summary}
                </textarea>
            </div>
        </section>
        <button type="submit" class="chat-submit" id="chat-submit">
            Save
        </button>

        </form>
      </Host>
    );
  }

}
