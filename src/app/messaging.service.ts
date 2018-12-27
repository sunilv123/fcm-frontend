import { Injectable } from '@angular/core';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable({ providedIn: 'root' })
export class MessagingService {
  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);
  private afAuth: AngularFireAuth;
  private db: AngularFireDatabase;
  constructor(db: AngularFireDatabase,afAuth: AngularFireAuth) {
    this.afAuth=afAuth;
    this.db=db
  }

  updateToken(token, userId) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) {
        return;
      }
      const data = { [userId]: token };
      this.db.object('fcmTokens/').update(data);
    });
  }

  getPermission(userId) {
    this.messaging
      .requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        this.currentMessage.next(this.messaging.getToken());
        return this.messaging.getToken();
      })
      .then(token => {
        console.log('This ia a token', token);
        this.currentMessage.next(token);
        this.updateToken(token, userId);
      })
      .catch(err => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage(payload => {
      console.log('Message received==========================. ', payload);
      this.currentMessage.next(payload);
    });
  }
}

