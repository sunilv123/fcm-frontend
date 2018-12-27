import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireMessagingModule } from 'angularfire2/messaging';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { MessagingService } from './messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { RouterModule } from '@angular/router';
;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDrUkz973TqGSfOAMLzWsvBn-3qunYzLds",
      authDomain: "angular-fcm-31ded.firebaseapp.com",
      databaseURL: "https://angular-fcm-31ded.firebaseio.com",
      projectId: "angular-fcm-31ded",
      storageBucket: "angular-fcm-31ded.appspot.com",
      messagingSenderId: "735019930663"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
