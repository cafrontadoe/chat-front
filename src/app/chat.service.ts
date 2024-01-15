// src/app/chat.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://assistantback.onrender.com'; // Replace with your actual API URL
//   private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL
// 

  constructor(private http: HttpClient) {}

  sendChatMessage(message: string): Observable<any> {
    const payload = { message: message, userId: "1" }; // Adjust the payload structure as needed
    return this.http.post(`${this.apiUrl}/chat/assistant`, payload);
  }
}
