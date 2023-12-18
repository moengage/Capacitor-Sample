//
//  NotificationService.swift
//  NotificationService
//
//  Created by UdayKiran Naik on 09/12/23.
//

import UserNotifications
import MoEngageRichNotification

class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        
        MoEngageSDKRichNotification.setAppGroupID("group.com.alphadevs.MoEngage.NotificationServices")
        MoEngageSDKRichNotification.handle(richNotificationRequest: request, withContentHandler: contentHandler)
    }
    
    override func serviceExtensionTimeWillExpire() {
        // Called just before the extension will be terminated by the system.
        // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }

}
