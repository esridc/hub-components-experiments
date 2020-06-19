/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IHubChat, } from "./utils/hub-types";
import { IUser, } from "@esri/arcgis-rest-common-types";
export namespace Components {
    interface ArcgisNotebook {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        "item": string;
        "portal": string;
        /**
          * Serialized authentication information.
         */
        "session": string;
        "view": "preview" | "edit";
    }
    interface ArcgisSurvey {
        "item": string;
    }
    interface DropArea {
        "allowedTypes": Array<string>;
    }
    interface HubButton {
        /**
          * action to trigger when the button is clicked
         */
        "action": Function;
        /**
          * Icon to display alongside the text
         */
        "icon": JSX.Element;
        /**
          * Button text to display
         */
        "text": string;
    }
    interface HubCard {
        "buttonAction": Function;
        "buttonText": string;
        "contenttype": string;
        "description": string;
        "image": string;
        "item": string;
        /**
          * Specify the layout of the card
         */
        "layout": "horizontal" | "vertical";
        "name": string;
        "url": string;
    }
    interface HubChat {
        /**
          * Set property to pass in messages. Can be used for default welcome message.
         */
        "incomingMessages": IHubChat;
        /**
          * Chat bot name
         */
        "name": string;
        /**
          * Current (or default) open state of the chatbox
         */
        "open": boolean;
        /**
          * Default input placeholder
         */
        "placeholder": string;
    }
    interface HubContentCard {
        "actionButton": any;
        "content": string;
        "contentItem": HubTypes.IContent;
        "layout": "horizontal" | "vertical";
    }
    interface HubContentTable {
        /**
          * Use the Hub API (true) or the Portal API (false)
         */
        "hubapi": boolean;
        /**
          * Total number of results to return
         */
        "limit": number;
        /**
          * Default query for the search
         */
        "query": string;
        /**
          * Hub site URL to scope for search
         */
        "site": string;
        /**
          * Hub site URL to scope for search
         */
        "sort": "name" | "modified" | "-name" | "-modified";
    }
    interface HubEmbed {
        "code": string;
        "description": string;
        "title": string;
    }
    interface HubDiscussion {
        "annotationsUrl": string;
        "author": string;
        "org": string;
        "portalUrl": string;
        "search": string;
        "target": string;
        "update": boolean;
    }
    interface HubEmbed {
        "code": string;
        "description": string;
        "title": string;
    }
    interface HubEvent {
        "attending": boolean;
        /**
          * ClientID to identify the app launching OAuth
         */
        "clientid": string;
        "eventDate": string;
        "eventGroupId": string;
        "eventOrganizer": string;
        "eventServiceUrl": string;
        "eventUrl": string;
        /**
          * identifier for the ArcGIS Hub initiative
         */
        "eventtitle": string;
        /**
          * url of the ArcGIS Online organization
         */
        "orgurl": string;
        /**
          * Serialized authentication information.
         */
        "session": string;
    }
    interface HubFilterCategory {
        /**
          * List of categories to show. Can be set or inferred from facet
         */
        "categories": Array<string>;
        /**
          * Build filter from a facet name
         */
        "facet": string;
        /**
          * Type of facet
         */
        "facettype": "checkbox" | "tree";
        /**
          * For group categories, choose a groupid
         */
        "group": string;
        /**
          * Filter name to display at top
         */
        "name": string;
        /**
          * Input query for search box
         */
        "query": string;
    }
    interface HubFollowButton {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        /**
          * Denotes whether the user is already following the configured initiative.
         */
        "following": boolean;
        /**
          * Text to show in the string when not yet followed
         */
        "followtext": string;
        /**
          * Follow icon
         */
        "icon": JSX.Element;
        /**
          * identifier for the ArcGIS Hub initiative
         */
        "initiativeid": string;
        /**
          * url of the ArcGIS Online organization
         */
        "orgurl": string;
        /**
          * Serialized authentication information.
         */
        "session": string;
        /**
          * Text to show in the string for user to unfollw
         */
        "unfollowtext": string;
        /**
          * User metadata
         */
        "user": IUser;
    }
    interface HubGallery {
        /**
          * Text to show in the button
         */
        "buttontext": string;
        "clientid": string;
        /**
          * Groups to limit search
         */
        "groups": string;
        /**
          * Use the Hub API (true) or the Portal API (false)
         */
        "hubapi": boolean;
        /**
          * Which Resources to search
         */
        "hubtype": "content" | "members" | "teams";
        /**
          * Hub site URL to scope for search
         */
        "layout": "horizontal" | "vertical";
        /**
          * Maximum number of results to return
         */
        "limit": number;
        "portal": string;
        /**
          * Default Query
         */
        "query": string;
        /**
          * Search Button text
         */
        "searchbutton": string;
        /**
          * Search placeholder text
         */
        "searchplaceholder": string;
        /**
          * Choose to show or hide search
         */
        "showsearch": boolean;
        /**
          * Hub site URL to scope for search
         */
        "site": string;
        /**
          * Default sort order
         */
        "sort": "name" | "modified";
    }
    interface HubInput {
        /**
          * Default address to search
         */
        "address": string;
        /**
          * Geographic extent limit for geocoding
         */
        "extent": any;
    }
    interface HubMap {
        /**
          * Center of the map, "[longitude, latitude]"
         */
        "center": string;
        /**
          * Option to show drawing tools
         */
        "drawing": boolean;
        /**
          * Webmap Item configuration to load
         */
        "webmap": string;
        /**
          * Map zoom level: 1=world ... 20=street
         */
        "zoom": number;
    }
    interface HubMetadataEditor {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        "item": string;
        "itemTitle": string;
        "portal": string;
        "session": string;
        "summary": string;
        "tags": Array<string>;
    }
    interface HubProfileCard {
        /**
          * ID For the profile. Username, Team ID, Org ID
         */
        "id": string;
        /**
          * Which Profile: member, team
         */
        "type": string;
    }
    interface HubProfileEditor {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        "portal": string;
        "session": string;
        "username": string;
    }
    interface HubRadar {
        "address": string;
        "mapCenter": string;
        "mapItem": any;
        "mapItemData": any;
        "mapZoom": number;
        "messages": any;
        "showmap": boolean;
        "webmap": string;
    }
    interface HubSonarChat {
        "sendMessages": IHubChat;
        "service": string;
    }
    interface HubSuggestInput {
        /**
          * Geographic extent limit for geocoding
         */
        "extent": any;
        /**
          * Value for input placeholder
         */
        "placeholder": string;
        /**
          * Default search
         */
        "query": string;
        /**
          * Value for submit button
         */
        "submit": string;
        /**
          * Values that the auto-complete textbox should search for
         */
        "suggestions": Array<string>;
    }
    interface HubTelemetry {
        "google": string;
    }
    interface HubUpload {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        "portal": string;
        "session": string;
    }
    interface HubUploadFile {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid": string;
        "file": File;
        "itemType": string;
        "portal": string;
        "session": string;
    }
    interface MetadataElementView {
        "description": string;
        "id": string;
        "required": boolean;
        "title": string;
        "type": string;
        "value": string;
    }
    interface MetadataForm {
        "locale": string;
        "resource": any;
        "spec": string;
    }
    interface MetadataSectionHelp {
        "description": string;
        "title": string;
    }
    interface MetadataSectionView {
        "description": string;
        "inputs": Array<any>;
        "resource": any;
        "title": string;
    }
}
declare global {
    interface HTMLArcgisNotebookElement extends Components.ArcgisNotebook, HTMLStencilElement {
    }
    var HTMLArcgisNotebookElement: {
        prototype: HTMLArcgisNotebookElement;
        new (): HTMLArcgisNotebookElement;
    };
    interface HTMLArcgisSurveyElement extends Components.ArcgisSurvey, HTMLStencilElement {
    }
    var HTMLArcgisSurveyElement: {
        prototype: HTMLArcgisSurveyElement;
        new (): HTMLArcgisSurveyElement;
    };
    interface HTMLDropAreaElement extends Components.DropArea, HTMLStencilElement {
    }
    var HTMLDropAreaElement: {
        prototype: HTMLDropAreaElement;
        new (): HTMLDropAreaElement;
    };
    interface HTMLHubButtonElement extends Components.HubButton, HTMLStencilElement {
    }
    var HTMLHubButtonElement: {
        prototype: HTMLHubButtonElement;
        new (): HTMLHubButtonElement;
    };
    interface HTMLHubCardElement extends Components.HubCard, HTMLStencilElement {
    }
    var HTMLHubCardElement: {
        prototype: HTMLHubCardElement;
        new (): HTMLHubCardElement;
    };
    interface HTMLHubChatElement extends Components.HubChat, HTMLStencilElement {
    }
    var HTMLHubChatElement: {
        prototype: HTMLHubChatElement;
        new (): HTMLHubChatElement;
    };
    interface HTMLHubContentCardElement extends Components.HubContentCard, HTMLStencilElement {
    }
    var HTMLHubContentCardElement: {
        prototype: HTMLHubContentCardElement;
        new (): HTMLHubContentCardElement;
    };
    interface HTMLHubContentTableElement extends Components.HubContentTable, HTMLStencilElement {
    }
    var HTMLHubContentTableElement: {
        prototype: HTMLHubContentTableElement;
        new (): HTMLHubContentTableElement;
    };
    interface HTMLHubEmbedElement extends Components.HubEmbed, HTMLStencilElement {
    }
    var HTMLHubEmbedElement: {
        prototype: HTMLHubEmbedElement;
        new (): HTMLHubEmbedElement;
    }
    interface HTMLHubDiscussionElement extends Components.HubDiscussion, HTMLStencilElement {
    }
    var HTMLHubDiscussionElement: {
        prototype: HTMLHubDiscussionElement;
        new (): HTMLHubDiscussionElement;
    };
    interface HTMLHubEmbedElement extends Components.HubEmbed, HTMLStencilElement {
    }
    var HTMLHubEmbedElement: {
        prototype: HTMLHubEmbedElement;
        new (): HTMLHubEmbedElement;
    };
    interface HTMLHubEventElement extends Components.HubEvent, HTMLStencilElement {
    }
    var HTMLHubEventElement: {
        prototype: HTMLHubEventElement;
        new (): HTMLHubEventElement;
    };
    interface HTMLHubFilterCategoryElement extends Components.HubFilterCategory, HTMLStencilElement {
    }
    var HTMLHubFilterCategoryElement: {
        prototype: HTMLHubFilterCategoryElement;
        new (): HTMLHubFilterCategoryElement;
    };
    interface HTMLHubFollowButtonElement extends Components.HubFollowButton, HTMLStencilElement {
    }
    var HTMLHubFollowButtonElement: {
        prototype: HTMLHubFollowButtonElement;
        new (): HTMLHubFollowButtonElement;
    };
    interface HTMLHubGalleryElement extends Components.HubGallery, HTMLStencilElement {
    }
    var HTMLHubGalleryElement: {
        prototype: HTMLHubGalleryElement;
        new (): HTMLHubGalleryElement;
    };
    interface HTMLHubInputElement extends Components.HubInput, HTMLStencilElement {
    }
    var HTMLHubInputElement: {
        prototype: HTMLHubInputElement;
        new (): HTMLHubInputElement;
    };
    interface HTMLHubMapElement extends Components.HubMap, HTMLStencilElement {
    }
    var HTMLHubMapElement: {
        prototype: HTMLHubMapElement;
        new (): HTMLHubMapElement;
    };
    interface HTMLHubMetadataEditorElement extends Components.HubMetadataEditor, HTMLStencilElement {
    }
    var HTMLHubMetadataEditorElement: {
        prototype: HTMLHubMetadataEditorElement;
        new (): HTMLHubMetadataEditorElement;
    };
    interface HTMLHubProfileCardElement extends Components.HubProfileCard, HTMLStencilElement {
    }
    var HTMLHubProfileCardElement: {
        prototype: HTMLHubProfileCardElement;
        new (): HTMLHubProfileCardElement;
    };
    interface HTMLHubProfileEditorElement extends Components.HubProfileEditor, HTMLStencilElement {
    }
    var HTMLHubProfileEditorElement: {
        prototype: HTMLHubProfileEditorElement;
        new (): HTMLHubProfileEditorElement;
    };
    interface HTMLHubRadarElement extends Components.HubRadar, HTMLStencilElement {
    }
    var HTMLHubRadarElement: {
        prototype: HTMLHubRadarElement;
        new (): HTMLHubRadarElement;
    };
    interface HTMLHubSonarChatElement extends Components.HubSonarChat, HTMLStencilElement {
    }
    var HTMLHubSonarChatElement: {
        prototype: HTMLHubSonarChatElement;
        new (): HTMLHubSonarChatElement;
    };
    interface HTMLHubSuggestInputElement extends Components.HubSuggestInput, HTMLStencilElement {
    }
    var HTMLHubSuggestInputElement: {
        prototype: HTMLHubSuggestInputElement;
        new (): HTMLHubSuggestInputElement;
    };
    interface HTMLHubTelemetryElement extends Components.HubTelemetry, HTMLStencilElement {
    }
    var HTMLHubTelemetryElement: {
        prototype: HTMLHubTelemetryElement;
        new (): HTMLHubTelemetryElement;
    };
    interface HTMLHubUploadElement extends Components.HubUpload, HTMLStencilElement {
    }
    var HTMLHubUploadElement: {
        prototype: HTMLHubUploadElement;
        new (): HTMLHubUploadElement;
    };
    interface HTMLHubUploadFileElement extends Components.HubUploadFile, HTMLStencilElement {
    }
    var HTMLHubUploadFileElement: {
        prototype: HTMLHubUploadFileElement;
        new (): HTMLHubUploadFileElement;
    };
    interface HTMLMetadataElementViewElement extends Components.MetadataElementView, HTMLStencilElement {
    }
    var HTMLMetadataElementViewElement: {
        prototype: HTMLMetadataElementViewElement;
        new (): HTMLMetadataElementViewElement;
    };
    interface HTMLMetadataFormElement extends Components.MetadataForm, HTMLStencilElement {
    }
    var HTMLMetadataFormElement: {
        prototype: HTMLMetadataFormElement;
        new (): HTMLMetadataFormElement;
    };
    interface HTMLMetadataSectionHelpElement extends Components.MetadataSectionHelp, HTMLStencilElement {
    }
    var HTMLMetadataSectionHelpElement: {
        prototype: HTMLMetadataSectionHelpElement;
        new (): HTMLMetadataSectionHelpElement;
    };
    interface HTMLMetadataSectionViewElement extends Components.MetadataSectionView, HTMLStencilElement {
    }
    var HTMLMetadataSectionViewElement: {
        prototype: HTMLMetadataSectionViewElement;
        new (): HTMLMetadataSectionViewElement;
    };
    interface HTMLElementTagNameMap {
        "arcgis-notebook": HTMLArcgisNotebookElement;
        "arcgis-survey": HTMLArcgisSurveyElement;
        "drop-area": HTMLDropAreaElement;
        "hub-button": HTMLHubButtonElement;
        "hub-card": HTMLHubCardElement;
        "hub-chat": HTMLHubChatElement;
        "hub-content-card": HTMLHubContentCardElement;
        "hub-content-table": HTMLHubContentTableElement;
        "hub-embed": HTMLHubEmbedElement;
        "hub-discussion": HTMLHubDiscussionElement;
        "hub-embed": HTMLHubEmbedElement;
        "hub-event": HTMLHubEventElement;
        "hub-filter-category": HTMLHubFilterCategoryElement;
        "hub-follow-button": HTMLHubFollowButtonElement;
        "hub-gallery": HTMLHubGalleryElement;
        "hub-input": HTMLHubInputElement;
        "hub-map": HTMLHubMapElement;
        "hub-metadata-editor": HTMLHubMetadataEditorElement;
        "hub-profile-card": HTMLHubProfileCardElement;
        "hub-profile-editor": HTMLHubProfileEditorElement;
        "hub-radar": HTMLHubRadarElement;
        "hub-sonar-chat": HTMLHubSonarChatElement;
        "hub-suggest-input": HTMLHubSuggestInputElement;
        "hub-telemetry": HTMLHubTelemetryElement;
        "hub-upload": HTMLHubUploadElement;
        "hub-upload-file": HTMLHubUploadFileElement;
        "metadata-element-view": HTMLMetadataElementViewElement;
        "metadata-form": HTMLMetadataFormElement;
        "metadata-section-help": HTMLMetadataSectionHelpElement;
        "metadata-section-view": HTMLMetadataSectionViewElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisNotebook {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        "item"?: string;
        "portal"?: string;
        /**
          * Serialized authentication information.
         */
        "session"?: string;
        "view"?: "preview" | "edit";
    }
    interface ArcgisSurvey {
        "item"?: string;
    }
    interface DropArea {
        "allowedTypes"?: Array<string>;
        /**
          * Emits the chat input
         */
        "onOnFilesSubmitted"?: (event: CustomEvent<any>) => void;
    }
    interface HubButton {
        /**
          * action to trigger when the button is clicked
         */
        "action"?: Function;
        /**
          * Icon to display alongside the text
         */
        "icon"?: JSX.Element;
        /**
          * Button text to display
         */
        "text"?: string;
    }
    interface HubCard {
        "buttonAction"?: Function;
        "buttonText"?: string;
        "contenttype"?: string;
        "description"?: string;
        "image"?: string;
        "item"?: string;
        /**
          * Specify the layout of the card
         */
        "layout"?: "horizontal" | "vertical";
        "name"?: string;
        "url"?: string;
    }
    interface HubChat {
        /**
          * Set property to pass in messages. Can be used for default welcome message.
         */
        "incomingMessages"?: IHubChat;
        /**
          * Chat bot name
         */
        "name"?: string;
        /**
          * Emits the chat input
         */
        "onOnChatSubmitted"?: (event: CustomEvent<any>) => void;
        /**
          * Current (or default) open state of the chatbox
         */
        "open"?: boolean;
        /**
          * Default input placeholder
         */
        "placeholder"?: string;
    }
    interface HubContentCard {
        "actionButton"?: any;
        "content"?: string;
        "contentItem"?: HubTypes.IContent;
        "layout"?: "horizontal" | "vertical";
    }
    interface HubContentTable {
        /**
          * Use the Hub API (true) or the Portal API (false)
         */
        "hubapi"?: boolean;
        /**
          * Total number of results to return
         */
        "limit"?: number;
        /**
          * Default query for the search
         */
        "query"?: string;
        /**
          * Hub site URL to scope for search
         */
        "site"?: string;
        /**
          * Hub site URL to scope for search
         */
        "sort"?: "name" | "modified" | "-name" | "-modified";
    }
    interface HubEmbed {
        "code"?: string;
        "description"?: string;
        "title"?: string;
    }
    interface HubDiscussion {
        "annotationsUrl"?: string;
        "author"?: string;
        "onEventAddAnnotation"?: (event: CustomEvent<any>) => void;
        "org"?: string;
        "portalUrl"?: string;
        "search"?: string;
        "target"?: string;
        "update"?: boolean;
    }
    interface HubEmbed {
        "code"?: string;
        "description"?: string;
        "title"?: string;
    }
    interface HubEvent {
        "attending"?: boolean;
        /**
          * ClientID to identify the app launching OAuth
         */
        "clientid"?: string;
        "eventDate"?: string;
        "eventGroupId"?: string;
        "eventOrganizer"?: string;
        "eventServiceUrl"?: string;
        "eventUrl"?: string;
        /**
          * identifier for the ArcGIS Hub initiative
         */
        "eventtitle"?: string;
        /**
          * url of the ArcGIS Online organization
         */
        "orgurl"?: string;
        /**
          * Serialized authentication information.
         */
        "session"?: string;
    }
    interface HubFilterCategory {
        /**
          * List of categories to show. Can be set or inferred from facet
         */
        "categories"?: Array<string>;
        /**
          * Build filter from a facet name
         */
        "facet"?: string;
        /**
          * Type of facet
         */
        "facettype"?: "checkbox" | "tree";
        /**
          * For group categories, choose a groupid
         */
        "group"?: string;
        /**
          * Filter name to display at top
         */
        "name"?: string;
        /**
          * Emitted when a filter is changed
         */
        "onFilterChanged"?: (event: CustomEvent<any>) => void;
        /**
          * Input query for search box
         */
        "query"?: string;
    }
    interface HubFollowButton {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        /**
          * Denotes whether the user is already following the configured initiative.
         */
        "following"?: boolean;
        /**
          * Text to show in the string when not yet followed
         */
        "followtext"?: string;
        /**
          * Follow icon
         */
        "icon"?: JSX.Element;
        /**
          * identifier for the ArcGIS Hub initiative
         */
        "initiativeid"?: string;
        /**
          * url of the ArcGIS Online organization
         */
        "orgurl"?: string;
        /**
          * Serialized authentication information.
         */
        "session"?: string;
        /**
          * Text to show in the string for user to unfollw
         */
        "unfollowtext"?: string;
        /**
          * User metadata
         */
        "user"?: IUser;
    }
    interface HubGallery {
        /**
          * Text to show in the button
         */
        "buttontext"?: string;
        "clientid"?: string;
        /**
          * Groups to limit search
         */
        "groups"?: string;
        /**
          * Use the Hub API (true) or the Portal API (false)
         */
        "hubapi"?: boolean;
        /**
          * Which Resources to search
         */
        "hubtype"?: "content" | "members" | "teams";
        /**
          * Hub site URL to scope for search
         */
        "layout"?: "horizontal" | "vertical";
        /**
          * Maximum number of results to return
         */
        "limit"?: number;
        "portal"?: string;
        /**
          * Default Query
         */
        "query"?: string;
        /**
          * Search Button text
         */
        "searchbutton"?: string;
        /**
          * Search placeholder text
         */
        "searchplaceholder"?: string;
        /**
          * Choose to show or hide search
         */
        "showsearch"?: boolean;
        /**
          * Hub site URL to scope for search
         */
        "site"?: string;
        /**
          * Default sort order
         */
        "sort"?: "name" | "modified";
    }
    interface HubInput {
        /**
          * Default address to search
         */
        "address"?: string;
        /**
          * Geographic extent limit for geocoding
         */
        "extent"?: any;
        /**
          * Emits the {address, coordinates} of the geocoded result
         */
        "onEventAddressUpdated"?: (event: CustomEvent<any>) => void;
    }
    interface HubMap {
        /**
          * Center of the map, "[longitude, latitude]"
         */
        "center"?: string;
        /**
          * Option to show drawing tools
         */
        "drawing"?: boolean;
        /**
          * Sends event when drawing is complete
         */
        "onDrawingComplete"?: (event: CustomEvent<any>) => void;
        /**
          * Webmap Item configuration to load
         */
        "webmap"?: string;
        /**
          * Map zoom level: 1=world ... 20=street
         */
        "zoom"?: number;
    }
    interface HubMetadataEditor {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        "item"?: string;
        "itemTitle"?: string;
        "portal"?: string;
        "session"?: string;
        "summary"?: string;
        "tags"?: Array<string>;
    }
    interface HubProfileCard {
        /**
          * ID For the profile. Username, Team ID, Org ID
         */
        "id"?: string;
        /**
          * Which Profile: member, team
         */
        "type"?: string;
    }
    interface HubProfileEditor {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        "portal"?: string;
        "session"?: string;
        "username"?: string;
    }
    interface HubRadar {
        "address"?: string;
        "mapCenter"?: string;
        "mapItem"?: any;
        "mapItemData"?: any;
        "mapZoom"?: number;
        "messages"?: any;
        "showmap"?: boolean;
        "webmap"?: string;
    }
    interface HubSonarChat {
        "sendMessages"?: IHubChat;
        "service"?: string;
    }
    interface HubSuggestInput {
        /**
          * Geographic extent limit for geocoding
         */
        "extent"?: any;
        "onQueryInput"?: (event: CustomEvent<any>) => void;
        /**
          * Emits the query of the input result
         */
        "onQuerySelect"?: (event: CustomEvent<any>) => void;
        /**
          * Value for input placeholder
         */
        "placeholder"?: string;
        /**
          * Default search
         */
        "query"?: string;
        /**
          * Value for submit button
         */
        "submit"?: string;
        /**
          * Values that the auto-complete textbox should search for
         */
        "suggestions"?: Array<string>;
    }
    interface HubTelemetry {
        "google"?: string;
    }
    interface HubUpload {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        "onOnUploadCompleted"?: (event: CustomEvent<Blob>) => void;
        "portal"?: string;
        "session"?: string;
    }
    interface HubUploadFile {
        /**
          * ClientID to identify the app launching auth
         */
        "clientid"?: string;
        "file"?: File;
        "itemType"?: string;
        "portal"?: string;
        "session"?: string;
    }
    interface MetadataElementView {
        "description"?: string;
        "id"?: string;
        "required"?: boolean;
        "title"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface MetadataForm {
        "locale"?: string;
        "resource"?: any;
        "spec"?: string;
    }
    interface MetadataSectionHelp {
        "description"?: string;
        "title"?: string;
    }
    interface MetadataSectionView {
        "description"?: string;
        "inputs"?: Array<any>;
        "resource"?: any;
        "title"?: string;
    }
    interface IntrinsicElements {
        "arcgis-notebook": ArcgisNotebook;
        "arcgis-survey": ArcgisSurvey;
        "drop-area": DropArea;
        "hub-button": HubButton;
        "hub-card": HubCard;
        "hub-chat": HubChat;
        "hub-content-card": HubContentCard;
        "hub-content-table": HubContentTable;
        "hub-embed": HubEmbed;
        "hub-discussion": HubDiscussion;
        "hub-embed": HubEmbed;
        "hub-event": HubEvent;
        "hub-filter-category": HubFilterCategory;
        "hub-follow-button": HubFollowButton;
        "hub-gallery": HubGallery;
        "hub-input": HubInput;
        "hub-map": HubMap;
        "hub-metadata-editor": HubMetadataEditor;
        "hub-profile-card": HubProfileCard;
        "hub-profile-editor": HubProfileEditor;
        "hub-radar": HubRadar;
        "hub-sonar-chat": HubSonarChat;
        "hub-suggest-input": HubSuggestInput;
        "hub-telemetry": HubTelemetry;
        "hub-upload": HubUpload;
        "hub-upload-file": HubUploadFile;
        "metadata-element-view": MetadataElementView;
        "metadata-form": MetadataForm;
        "metadata-section-help": MetadataSectionHelp;
        "metadata-section-view": MetadataSectionView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-notebook": LocalJSX.ArcgisNotebook & JSXBase.HTMLAttributes<HTMLArcgisNotebookElement>;
            "arcgis-survey": LocalJSX.ArcgisSurvey & JSXBase.HTMLAttributes<HTMLArcgisSurveyElement>;
            "drop-area": LocalJSX.DropArea & JSXBase.HTMLAttributes<HTMLDropAreaElement>;
            "hub-button": LocalJSX.HubButton & JSXBase.HTMLAttributes<HTMLHubButtonElement>;
            "hub-card": LocalJSX.HubCard & JSXBase.HTMLAttributes<HTMLHubCardElement>;
            "hub-chat": LocalJSX.HubChat & JSXBase.HTMLAttributes<HTMLHubChatElement>;
            "hub-content-card": LocalJSX.HubContentCard & JSXBase.HTMLAttributes<HTMLHubContentCardElement>;
            "hub-content-table": LocalJSX.HubContentTable & JSXBase.HTMLAttributes<HTMLHubContentTableElement>;
            "hub-embed": LocalJSX.HubEmbed & JSXBase.HTMLAttributes<HTMLHubEmbedElement>;
            "hub-discussion": LocalJSX.HubDiscussion & JSXBase.HTMLAttributes<HTMLHubDiscussionElement>;
            "hub-embed": LocalJSX.HubEmbed & JSXBase.HTMLAttributes<HTMLHubEmbedElement>;
            "hub-event": LocalJSX.HubEvent & JSXBase.HTMLAttributes<HTMLHubEventElement>;
            "hub-filter-category": LocalJSX.HubFilterCategory & JSXBase.HTMLAttributes<HTMLHubFilterCategoryElement>;
            "hub-follow-button": LocalJSX.HubFollowButton & JSXBase.HTMLAttributes<HTMLHubFollowButtonElement>;
            "hub-gallery": LocalJSX.HubGallery & JSXBase.HTMLAttributes<HTMLHubGalleryElement>;
            "hub-input": LocalJSX.HubInput & JSXBase.HTMLAttributes<HTMLHubInputElement>;
            "hub-map": LocalJSX.HubMap & JSXBase.HTMLAttributes<HTMLHubMapElement>;
            "hub-metadata-editor": LocalJSX.HubMetadataEditor & JSXBase.HTMLAttributes<HTMLHubMetadataEditorElement>;
            "hub-profile-card": LocalJSX.HubProfileCard & JSXBase.HTMLAttributes<HTMLHubProfileCardElement>;
            "hub-profile-editor": LocalJSX.HubProfileEditor & JSXBase.HTMLAttributes<HTMLHubProfileEditorElement>;
            "hub-radar": LocalJSX.HubRadar & JSXBase.HTMLAttributes<HTMLHubRadarElement>;
            "hub-sonar-chat": LocalJSX.HubSonarChat & JSXBase.HTMLAttributes<HTMLHubSonarChatElement>;
            "hub-suggest-input": LocalJSX.HubSuggestInput & JSXBase.HTMLAttributes<HTMLHubSuggestInputElement>;
            "hub-telemetry": LocalJSX.HubTelemetry & JSXBase.HTMLAttributes<HTMLHubTelemetryElement>;
            "hub-upload": LocalJSX.HubUpload & JSXBase.HTMLAttributes<HTMLHubUploadElement>;
            "hub-upload-file": LocalJSX.HubUploadFile & JSXBase.HTMLAttributes<HTMLHubUploadFileElement>;
            "metadata-element-view": LocalJSX.MetadataElementView & JSXBase.HTMLAttributes<HTMLMetadataElementViewElement>;
            "metadata-form": LocalJSX.MetadataForm & JSXBase.HTMLAttributes<HTMLMetadataFormElement>;
            "metadata-section-help": LocalJSX.MetadataSectionHelp & JSXBase.HTMLAttributes<HTMLMetadataSectionHelpElement>;
            "metadata-section-view": LocalJSX.MetadataSectionView & JSXBase.HTMLAttributes<HTMLMetadataSectionViewElement>;
        }
    }
}
