const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.fcmSend = functions.database.ref('/messages/test/{message}').onCreate(event => {


  const message = event.after.val()
  const userId  = event.params.userId
console.log('oncrate.......');

  const payload = {
        notification: {
          title: message.title,
          body: message.body,
          icon: "https://placeimg.com/250/250/people"
        }
      };


   admin.database()
        .ref(`/fcmTokens/${userId}`)
        .once('value')
        .then(token => token.val() )
        .then(userFcmToken => {
          return admin.messaging().sendToDevice(userFcmToken, payload)
        })
        .then(res => {
          console.log("Sent Successfully", res);
        })
        .catch(err => {
          console.log(err);
        });

});