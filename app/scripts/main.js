'use strict';

firebase.initializeApp(window.firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(window.vapidPublicKey);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(window.NotificationConfig.sw_url).then(function(swReg) {
            messaging.useServiceWorker(swReg);
            messaging.requestPermission().then(function () {
                messaging.getToken().then(function (currentToken) {
                    // TODO : Hanle Token
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
        })
    });
}
