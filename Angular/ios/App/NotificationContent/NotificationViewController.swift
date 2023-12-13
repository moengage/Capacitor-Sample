//
//  NotificationViewController.swift
//  NotificationContent
//
//  Created by UdayKiran Naik on 09/12/23.
//

import UIKit
import UserNotifications
import UserNotificationsUI
import MoEngageRichNotification

class NotificationViewController: UIViewController, UNNotificationContentExtension {

    @IBOutlet var label: UILabel?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any required interface initialization here.
        MoEngageSDKRichNotification.setAppGroupID("group.com.alphadevs.MoEngage.NotificationServices")
    }
    
    func didReceive(_ notification: UNNotification) {
        MoEngageSDKRichNotification.addPushTemplate(toController: self, withNotification: notification)
    }

}
