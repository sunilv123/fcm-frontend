import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fcmExample';
  message;

  constructor(private msgService: MessagingService) {}

  ngOnInit() {
    this.msgService.getPermission('sunil')
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }
}
