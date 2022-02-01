import { Component } from '@angular/core';
import { DataService, Option } from '../services/data.service';
import {
  MoECapacitorCore, MoEInAppLifecycleData, MoEInAppNavigationData, MoEInAppCustomActionData, MoEProperties,
  MoEUserGender, MoEAppStatus, MoEPushTokenData, MoEPushCampaignData, MoEInAppSelfHandledCampaignData
} from 'capacitor-moengage-core'
import { MoECapacitorGeofence } from 'capacitor-moengage-geofence';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tag: string = "AngularSampleApp_HomePage";

  constructor(private data: DataService) {
  }

  ngOnInit() {
    console.log(this.tag + " in ngOnInit() : will add listeners");

    MoECapacitorCore.addListener("pushTokenGenerated", (data: MoEPushTokenData) => {
      console.log(this.tag + " Received callback 'pushTokenGenerated',  data: " + JSON.stringify(data))
    });
    MoECapacitorCore.addListener("pushClicked", (data: MoEPushCampaignData) => {
      console.log(this.tag + " Received callback 'pushClicked',  data: " + JSON.stringify(data))
    });

    MoECapacitorCore.addListener("inAppCampaignShown", (data: MoEInAppLifecycleData) => {
      console.log(this.tag + " Received callback 'inAppCampaignShown',  data: " + JSON.stringify(data))
    });

    MoECapacitorCore.addListener("inAppCampaignDismissed", (data: MoEInAppLifecycleData) => {
      console.log(this.tag + " Received callback 'inAppCampaignDismissed',  data: " + JSON.stringify(data))
    });

    MoECapacitorCore.addListener("inAppCampaignClicked", (data: MoEInAppNavigationData) => {
      console.log(this.tag + " Received callback 'inAppCampaignClicked',  data: " + JSON.stringify(data))
    });

    MoECapacitorCore.addListener("inAppCampaignCustomAction", (data: MoEInAppCustomActionData) => {
      console.log(this.tag + " Received callback 'inAppCampaignCustomAction',  data: " + JSON.stringify(data))
    });

    MoECapacitorCore.addListener("inAppCampaignSelfHandled", (data: MoEInAppSelfHandledCampaignData) => {
      console.log(this.tag + " Received callback 'inAppCampaignSelfHandled',  data: " + JSON.stringify(data))

      MoECapacitorCore.selfHandledShown(data)
      MoECapacitorCore.selfHandledPrimaryClicked(data)
      MoECapacitorCore.selfHandledClicked(data)
      MoECapacitorCore.selfHandledDismissed(data)
    });

    MoECapacitorCore.initialize();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getOptions(): Option[] {
    return this.data.getOptions();
  }

  selectedItem?: Option;
  onSelect(item: Option): void {
    this.selectedItem = item;
    console.log("selected item : " + item.title);
    switch (item.title) {
      case "Track Event":
        this.trackInteractiveEvent();
        break;
      case "Track Non-Interactive Event":
        this.trackNonIteractiveEvent();
        break;
      case "Track Event without attributes":
        this.trackEvent();
        break;
      case "Set Custom User Attribute":
        MoECapacitorCore.setUserAttribute({ name: "User Attr1", value: "Value 1" });
        break;
      case "Set Default User Attributes":
        this.setDefaultUserAttributes();
        break;
      case "iOS - Register For Push":
        this.registerForPush();
        break;
      case "Logout":
        this.logOut();
        break;
      case "iOS - Start Geofence Monitoring":
        MoECapacitorGeofence.startGeofenceMonitoring()
        break;
      case "Set App Status - INSTALL":
        MoECapacitorCore.setAppStatus({ appStatus: MoEAppStatus.INSTALL });
        break;
      case "Set App Status - UPDATE":
        MoECapacitorCore.setAppStatus({ appStatus: MoEAppStatus.UPDATE });
        break;
      case "Set Unique ID":
        this.setUniqueId();
        break;
      case "Set Alias":
        this.setAlias();
        break;
      case "Set Username":
        this.setUserName();
        break;
      case "Set First Name":
        this.setFirstName();
        break;
      case "Set Last Name":
        this.setLastName();
        break;
      case "Set Email":
        this.setEmail()
        break;
      case "Set PhoneNumber":
        this.setPhoneNumber();
        break;
      case "Set Gender":
        MoECapacitorCore.setGender({ gender: MoEUserGender.MALE });
        break;
      case "Set Birthday":
        MoECapacitorCore.setBirthDate({ birthdate: "1970-01-01T12:00:00Z" });
        break;
      case "Set User Location":
        MoECapacitorCore.setUserAttributeLocation({ name: "location attribute", location: { latitude: 25.23, longitude: 73.23 } });
        break;
      case "Set ISO Date":
        MoECapacitorCore.setUserAttributeDate({ name: "LastPurchaseDate", value: "1970-01-01T12:00:00Z" });
        break;
      case "Opt out data/push/inapp":
        MoECapacitorCore.optOutDataTracking({ shouldOptOut: true });
        MoECapacitorCore.optOutPushNotification({ shouldOptOut: true });
        MoECapacitorCore.optOutInAppNotification({ shouldOptOut: true });
        break;
      case "Opt in data/push/inapp":
        MoECapacitorCore.optOutDataTracking({ shouldOptOut: false });
        MoECapacitorCore.optOutPushNotification({ shouldOptOut: false });
        MoECapacitorCore.optOutInAppNotification({ shouldOptOut: false });
        break;
      case "Android - Pass FCM Token":
        this.passFCMToken();
        break;
      case "Android - Pass FCM Payload":
        this.passFCMPayload();
        break;
      case "Show InApp":
        MoECapacitorCore.showInApp();
        break;
      case "SetCurrent Context":
        this.setCurrentContext();
        break;
      case "Self handled InApp":
        MoECapacitorCore.getSelfHandledInApp();
        break;
      case "Reset Current Context":
        MoECapacitorCore.resetInAppContext();
        break;
      case "Enable SDK":
        MoECapacitorCore.enableSdk();
        break;
      case "Disable SDK":
        MoECapacitorCore.disableSdk();
        break;
      default:
        console.log(this.tag + " EventHandler(): did not find any matching event!")
        break;
    }
  }

  setDefaultUserAttributes() {
    MoECapacitorCore.setUniqueId({ uniqueId: "202102" });
    MoECapacitorCore.setUserName({ userName: "abc" });
    MoECapacitorCore.setFirstName({ firstName: "abc" });
    MoECapacitorCore.setLastName({ lastName: "xyz" });
    MoECapacitorCore.setEmailId({ emailId: "abcdef@xyz.com" });
    MoECapacitorCore.setMobileNumber({ mobileNumber: "0987654321" });
    MoECapacitorCore.setGender({ gender: MoEUserGender.FEMALE });
    MoECapacitorCore.setBirthDate({ birthdate: "1970-01-01T12:00:00Z" });
    MoECapacitorCore.setUserLocation({ location: { latitude: 25.23, longitude: 73.23 } });
    MoECapacitorCore.setUserAttributeLocation({ name: "default location attribute", location: { latitude: 25.23, longitude: 73.23 } });
    MoECapacitorCore.setUserAttributeDate({ name: "LastPurchaseDate", value: "1970-01-01T12:00:00Z" });
  }

  trackInteractiveEvent() {
    console.log(this.tag + " trackInteractiveEvent() :: ");
    const prop: MoEProperties = {
      generalAttributes: [
        { name: "GA1", value: "GV1" },
        { name: "GA2", value: 123 },
        { name: "GA3", value: true }
      ],
      dateTimeAttributes: [
        { name: "DTA1", value: "2018-10-05T14:48:00.000Z" },
        { name: "DTA2", value: "2021-10-05T14:48:00.000Z" },
        { name: "DTA3", value: "2022-01-01T14:48:00.000Z" }
      ],
      locationAttributes: [
        { name: "LA1", value: { latitude: 15.123, longitude: 10.002 } },
        { name: "LA2", value: { latitude: 12.123, longitude: 13.002 } }
      ],
      isNonInteractive: false
    };
    MoECapacitorCore.trackEvent({ eventName: "trackInteractiveEvent", eventAttributes: prop });
  }

  trackNonIteractiveEvent() {
    console.log(this.tag + " trackNonIteractiveEvent() :: ");
    const prop: MoEProperties = {
      generalAttributes: [
        { name: "GA1", value: "GV1" },
        { name: "GA2", value: 123 },
        { name: "GA3", value: true }
      ],
      dateTimeAttributes: [
        { name: "DTA1", value: "2018-10-05T14:48:00.000Z" },
        { name: "DTA2", value: "2021-10-05T14:48:00.000Z" },
        { name: "DTA3", value: "2022-01-01T14:48:00.000Z" }
      ],
      locationAttributes: [
        { name: "LA1", value: { latitude: 15.123, longitude: 10.002 } },
        { name: "LA2", value: { latitude: 12.123, longitude: 13.002 } }
      ],
      isNonInteractive: true
    };
    MoECapacitorCore.trackEvent({ eventName: "trackNonIteractiveEvent", eventAttributes: prop });
  }

  trackEvent() {
    console.log(this.tag + " trackInteractiveEvent() :: ");
    MoECapacitorCore.trackEvent({ eventName: "trackNonIteractiveEvent" });
  }

  registerForPush() {
    MoECapacitorCore.registerForPush();
  }

  logOut() {
    MoECapacitorCore.logoutUser()
  }

  setCurrentContext() {
    let contextElement = prompt('Enter context separated by comma');
    if (contextElement === null) {
      return;
    }
    var contexts = contextElement.split(',');
    MoECapacitorCore.setInAppContext({ contexts: contexts });
  }

  setUniqueId() {
    let contextElement = prompt('Enter UniqueId');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setUniqueId({ uniqueId: contextElement });
  }

  setAlias() {
    let contextElement = prompt('Enter Alias');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setAlias({ alias: contextElement });
  }

  setUserName() {
    let contextElement = prompt('Enter Username');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setUserName({ userName: contextElement });
  }

  setFirstName() {
    let contextElement = prompt('Enter First Name');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setFirstName({ firstName: contextElement });
  }

  setLastName() {
    let contextElement = prompt('Enter Last Name');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setLastName({ lastName: contextElement });
  }

  setEmail() {
    let contextElement = prompt('Enter email');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setEmailId({ emailId: contextElement });
  }

  setPhoneNumber() {
    let contextElement = prompt('Enter phone number');
    if (contextElement === null) {
      return;
    }
    MoECapacitorCore.setMobileNumber({ mobileNumber: contextElement });
  }

  passFCMToken() {
    MoECapacitorCore.passFcmPushToken({ token: "er5BLF2o52Y:APA91bFQaMLsMLjIo0FkkzroADvBkVlg93N3rCAi9hGVN_oMuVBb-N7edbU4dw2qJ9k0CKbtIgJc9qFDTA7H6ZY27aF-SXr4G7GHtvrbcf18OhWOMtysNnHqK3OtV_sF3jpQO7IcJxJ5" });
  }

  passFCMPayload() {
    var json = { "gcm_activityName": "com.example.hello.MainActivity", "gcm_notificationType": "normal notification", "gcm_actions": "[{\"action_title\":\"B1\",\"action_id\":\"B1\",\"valueOf\":\"Button 1 clicked\",\"action_tag\":\"m_track\",\"track\":\"action_button_click\"},{\"action_title\":\"B2\",\"action_id\":\"B2\",\"action_tag\":\"m_custom\",\"custom_payload\":\"Custom action on B2 click\"}]", "moe_cid_attr": "{\"moe_campaign_id\":\"000000000000000041115247\"}", "push_from": "moengage", "gcm_alert": "basic", "gcm_title": "basic notification", "FallBackFlagAndroid": "false", "gcm_campaign_id": "000000000000000041115247_L_", "nav_def": "default navigation selected", "moe_channel_id": "moe_default_channel" };

    MoECapacitorCore.passFcmPushPayload({ payload: json });
    // "{\"platform\":\"android\",\"isDefaultAction\":true,\"payload\":{\"FallBackFlagAndroid\":\"false\",\"gcm_activityName\":\"com.moengage.sampleapp.MainActivity\",\"FROM_BACKGROUND\":false,\"gcm_alert\":\"test\",\"gcm_notificationType\":\"normal notification\",\"push_from\":\"moengage\",\"gcm_campaign_id\":\"000000000000000080602811_L_0\",\"moe_channel_id\":\"moe_sound_channel\",\"gcm_subtext\":\"test\",\"moe_cid_attr\":\"{\\\"moe_campaign_id\\\":\\\"000000000000000080602811\\\"}\",\"MOE_NOTIFICATION_ID\":18005,\"test key\":\"test data\",\"MOE_MSG_RECEIVED_TIME\":1613746382355,\"gcm_title\":\"test\"},\"type\":\"MoEPushClicked\"}")
  }
}
