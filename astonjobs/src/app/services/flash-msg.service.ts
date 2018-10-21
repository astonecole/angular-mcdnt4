import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class FlashMsgService {
  messages: Subject<Message> = new Subject<Message>();

  constructor() { }

  addMessage(message: Message) {
    this.messages.next(message);
  }

  reset() {
    this.messages.next();
  }
}
