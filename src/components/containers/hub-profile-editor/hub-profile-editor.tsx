import { Component, Host, h, Prop, State} from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as Portal from "@esri/arcgis-rest-portal";
import { readSessionFromCookie } from '../../../utils/utils';
import { getMember } from '../../../utils/hub-member';

@Component({
  tag: 'hub-profile-editor',
  styleUrl: 'hub-profile-editor.css',
  shadow: true
})
export class HubProfileEditor {

  @Prop({ mutable: false }) username:string = "ajturner";

  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop() portal = "https://www.arcgis.com";
  @Prop({ mutable: true }) session: string = null;

  @State() user: any = null;

  async componentWillLoad() {
    this.session = readSessionFromCookie()
    this.user = await getMember(this.username);
    // Portal.getUser(this.username).then((response) => {
    //   this.user = response; // For sending into the metadata form
    // })
  }

  onSave(e) {
    e.preventDefault()
    e.stopPropagation()

    const authentication = UserSession.deserialize(this.session);
    Portal.updateUser({
      user: {
        username: this.username,
        description: this.user.description,
        tags: this.user.tags
      },
      authentication
    })
  }
  render() {
    return (
      <Host>
        <form onSubmit={(e) => this.onSave(e)}>
          <metadata-form
            spec="user"
            resource={this.user}
          ></metadata-form>
          <button type="submit" class="chat-submit" id="chat-submit">
              Save Profile
          </button>
        </form>  
      </Host>
       
    );
  }
}