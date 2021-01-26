import { r as registerInstance, h } from './index-17d4341f.js';
import './index-fd5669bb.js';
import { i as getPortal } from './index-2b41d503.js';
import './index-31ce56d3.js';
import { U as UserSession } from './index-80082925.js';
import { r as registerForEvent, u as unregisterForEvent, b as getEventServiceUrl, s as searchEvents } from './index-52c4095a.js';
import { r as readSessionFromCookie, w as writeSessionToCookie } from './utils-877cdb99.js';
var hubEventCss = ".hub-event-details{border:1px solid #ccc;border-radius:4px;width:100%;color:#323232;font-size:14px;width:380px;height:400px;font-family:'Arial';display:grid;grid-template-columns:auto;grid-template-rows:40% 40% 20%;grid-template-areas:\"header\"\n    \"main\"\n    \"footer\"}.hub-event-background-image{background-color:rgb(255, 174, 0);grid-area:header}.hub-event-content{grid-area:main;padding-left:40px;padding-right:40px}.hub-event-footer{grid-area:footer;padding-left:40px}";
var HubEvent = /** @class */ (function () {
    function HubEvent(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * url of the ArcGIS Online organization
         */
        this.orgurl = "https://www.arcgis.com";
        /**
         * Text to display on the button
         */
        this.callToActionText = "Attend";
        this.triggerRegister = function () {
            _this.session = readSessionFromCookie();
            if (!_this.session) {
                // register your own app to create a unique clientId
                return UserSession.beginOAuth2({
                    clientId: _this.clientid,
                    portal: _this.orgurl + "/sharing/rest",
                    redirectUri: window.location + "authenticate.html"
                })
                    .then(function (session) {
                    writeSessionToCookie(session);
                    _this.session = session.serialize();
                    return _this.toggleRegister();
                });
            }
            else {
                return _this.toggleRegister();
            }
        };
        this.toggleRegister = function () {
            if (!_this.attending) {
                return registerForEvent({
                    groupId: _this.eventGroupId,
                    authentication: UserSession.deserialize(_this.session)
                })
                    .then(function (response) {
                    if (response.success === true) {
                        return Promise.resolve();
                    }
                })
                    .catch(function (err) {
                    if (err.originalMessage === "User is already a member of group.") {
                        return Promise.resolve();
                    }
                    else
                        throw err;
                })
                    .then(function () {
                    _this.callToActionText = "Attending";
                    _this.attending = true;
                    return { success: true };
                });
            }
            else {
                return unregisterForEvent({
                    groupId: _this.eventGroupId,
                    authentication: UserSession.deserialize(_this.session)
                })
                    .then(function (response) {
                    if (response.success === true) {
                        _this.callToActionText = "Attend";
                        _this.attending = false;
                        return { success: true };
                    }
                    else
                        return { success: false };
                });
            }
        };
    }
    HubEvent.prototype.componentDidLoad = function () {
        var _this = this;
        var hubUrl = this.orgurl.replace('maps', 'hub');
        // const hubAPI = 'https://hub.arcgis.com/api/v3/events/BBpPn9wZu2D6eTNY/Hub%20Events%20(public)/FeatureServer/0/95/attachments/40'
        getPortal(null, {
            portal: this.orgurl + "/sharing/rest/"
        })
            .then(function (response) {
            getEventServiceUrl(response.id)
                .then(function (url) {
                _this.eventServiceUrl = url;
                searchEvents({ url: _this.eventServiceUrl })
                    .then(function (response) {
                    if (response.data.length > 0) {
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].attributes.title === _this.eventtitle) {
                                var eventDetails = response.data[i].attributes;
                                _this.eventDate = new Date(eventDetails.startDate).toString();
                                _this.eventGroupId = eventDetails.groupId;
                                _this.eventOrganizer = _this.digOutContactInfo(eventDetails);
                                _this.eventUrl = hubUrl + "/events/" + eventDetails.url;
                                // this.eventImage = `${eventServiceUrl}/${eventDetails.OBJECTID}/attachments`
                                break;
                            }
                        }
                    }
                });
            });
        });
    };
    HubEvent.prototype.digOutContactInfo = function (details) {
        var organizers = JSON.parse(details.organizers);
        if (organizers.length > 0) {
            var contact = "mailto:" + organizers[0].contact;
            return "<p>organized by: <a href=" + contact + ">" + organizers[0].name + "</a></p>";
        }
    };
    HubEvent.prototype.render = function () {
        var description = "<p>" + this.eventDate + "</p><p>" + this.eventOrganizer + "</p>";
        return (h("hub-card", { name: this.eventtitle, contenttype: "Event", url: this.eventUrl, description: description, buttonText: this.callToActionText, buttonAction: this.triggerRegister }));
    };
    return HubEvent;
}());
HubEvent.style = hubEventCss;
export { HubEvent as hub_event };
