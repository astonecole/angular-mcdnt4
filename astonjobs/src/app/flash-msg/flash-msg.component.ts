import { Component, OnInit } from '@angular/core';

import { Message } from '../model/message';
import { FlashMsgService } from '../services/flash-msg.service';

@Component({
  selector: 'app-flash-msg',
  templateUrl: './flash-msg.component.html',
  styleUrls: ['./flash-msg.component.css']
})
export class FlashMsgComponent implements OnInit {
  messages: Message[] = [];

  constructor(private flashMsgService: FlashMsgService) { }

  ngOnInit() {
    this.flashMsgService.messages.subscribe(
      data => {
        this.messages = [data, ...this.messages];
      }
    );
  }

  onClose(index): void {
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }
}
