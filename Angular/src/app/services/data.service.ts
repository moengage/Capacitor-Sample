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
      title: "Opt out data/push/inapp"
    },
    {
      title: "Opt in data/push/inapp"
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

