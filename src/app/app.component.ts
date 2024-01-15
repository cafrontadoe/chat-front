import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-front';

  messages = [
    { type: 'received', text: 'Hello!' },
    { type: 'sent', text: 'Hi there!' },
    // Add more messages as needed
  ];

  newMessage: string = '';

  constructor(private chatService: ChatService) {}


  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ type: 'sent', text: this.newMessage.trim() });
      this.chatService.sendChatMessage(this.newMessage.trim())
        .subscribe(
          response => {
            console.log('Message sent successfully:', response);
            this.messages.push({ type: 'received', text: response.response.trim() });

            // Handle success, if needed
          },
          error => {
            console.error('Error sending message:', error);
            // Handle error, if needed
          }
        );
      this.newMessage = '';
      // Add logic to send the message to the backend or handle it as needed
    }
  }
}
