import { Injectable } from '@angular/core';

export interface Option {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Option[] = [
    {
      title: "Track Event"
    },
    {
      title: "Track Non-Interactive Event"
    },
    {
      title: "Track Event without attributes"
    },
    {
      title: "Set Custom User Attribute"
    },
    {
      title: "Set Default User Attributes"
    },
    {
      title: "iOS - Register For Push"
    },
    {
      title: "Logout"
    },
    {
      title: "iOS - Start Geofence Monitoring"
    },
    {
      title: "Set App Status - INSTALL"
    },
    {
      title: "Set App Status - UPDATE"
    },
    {
      title: "Set Unique ID"
    },
    {
      title: "Set Alias"
    },
    {
      title: "Set Username"
    },
    {
      title: "Set First Name"
    },
    {
      title: "Set Last Name"
    },
    {
      title: "Set Email"
    },
    {
      title: "Set PhoneNumber"
    },
    {
      title: "Set Gender"
    },
    {
      title: "Set Birthday"
    },
    {
      title: "Set User Location"
    },
    {
      title: "Set ISO Date"
    },
    {
      title: "Enable Data Tracking"
    },
    {
      title: "Disable Data Tracking"
    },
    {
      title: "Android - Pass FCM Token"
    },
    {
      title: "Android - Pass FCM Payload"
    },
    {
      title: "Show InApp"
    },
    {
      title: "SetCurrent Context"
    },
    {
      title: "Reset Current Context"
    },
    {
      title: "Self handled InApp"
    },
    {
      title: "Enable SDK"
    },
    {
      title: "Disable SDK"
    },
    {
      title: "Enable GAID Tracking"
    },
    {
      title: "Disable GAID Tracking"
    },
    {
      title: "Enable Android ID Tracking"
    },
    {
      title: "Disable Android ID Tracking"
    },
    {
      title: "Android - Navigate to Settings"
    },
    {
      title: "Android - Request Push Permission"
    },
    {
      title: "Android - Push Permission Granted"
    },
    {
      title: "Android - Push Permission Denied"
    },
    {
      title: "Enable Device ID Tracking"
    },
    {
      title: "Disable Device ID Tracking"
    },
    {
      title: "Enable Geofence Monitoring"
    },
    {
      title: "Disable Geofence Monitoring"
    },
    {
      title: "Android - Update Permission Request Count"
    },
    {
      title: "Delete Current User"
    }

  ];

  constructor() { }

  public getOptions(): Option[] {
    return this.messages;
  }

  public getOptionById(id: number): Option {
    return this.messages[id];
  }
}

