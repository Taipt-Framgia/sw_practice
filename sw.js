'use strict';

self.addEventListener('install', function(e) {
  console.log('installing');
  
});
self.addEventListener('fetch', function(e) {
 
});

self.addEventListener('push', function(event) {
    var rawData = event.data.json();
    var notificationTitle = rawData.data.title;
    var notificationOptions = {
        body: rawData.data.body,
        icon: rawData.data.icon,
        image: rawData.data.image,
        data: JSON.parse(rawData.data.data),
    };

    if (rawData.data.received_api) {
        fetch(rawData.data.received_api, { mode: 'no-cors' });
    }

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    if (event.notification.data.clicked_api) {
        fetch(event.notification.data.clicked_api, { mode: 'no-cors' });
    }

    event.waitUntil(
        clients.openWindow(event.notification.data.click_action)
    );
});
