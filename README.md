
First install two packages:

firebase
angularfire2
npm install firebase angularfire2 --save

Now create a manifest.json file in the src/ directory. Add the following lines to it.

{ 
"fcm_sender_id": "103953800507"
}
The value of fcm_sender_id not required to change. It will be same.

Then link it in the head of index.html

<link rel="manifest" href="/manifest.json">

Create another file in the src/ directory named firebase-messaging-sw.js. The worker just hangs out in the background with the messaging config waiting to notify a user.

In this file just replace 'messagingSenderId': 'YOUR-SENDER-ID' with the sender id generated while creating your fcm project.
like:

firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "735019930663"
});

const messaging = firebase.messaging();

Add finally add them inside apps in angular.json.

Copy the functions from messaging.service.ts. And finally use them in ngOninit in app.component.ts.

this.msgService.getPermission(); this.msgService.receiveMessage(); this.message = this.msgService.currentMessage;

Open the browser you will get popup asking permission say yes then browser will generate the unique token.

