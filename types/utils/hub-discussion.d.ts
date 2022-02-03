import { ISearchResult } from "@esri/arcgis-rest-portal";
import { UserSession } from "@esri/arcgis-rest-auth";
export interface IHubDiscussion {
  id: string;
  title: string;
  summary: string;
  description: string;
  topics?: string;
  location?: string;
  moderation?: boolean;
  moderators?: Array<string>;
  channels?: Array<string>;
  blockwords?: Array<string>;
  allowReply?: boolean;
  allowUpVote?: boolean;
  allowDownVote?: boolean;
  allowFlag?: boolean;
}
export declare function searchDiscussions(query: any): Promise<ISearchResult<IHubDiscussion>>;
export declare function getDiscussion(id: string): Promise<IHubDiscussion>;
export declare function createDiscussion(discussion: IHubDiscussion, authentication: UserSession): Promise<string>;
export declare function updateDiscussion(updateDiscussion: IHubDiscussion): Promise<IHubDiscussion>;
export declare function deleteDiscussion(_id: string): Promise<boolean>;
export declare function getDiscussionPosts(): Promise<any>;
