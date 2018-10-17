import { Component } from '@angular/core';

import { Comment } from './model/comment';

/**
 * Data Binding
 * 
 *  - String interpolation.
 *  - Property Binding
 *  - Event Binding
 *  - Two way Data Binding
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular title';
  comments: Comment[] = [];

  addMessage(event) {
    this.comments.push({
      id: Date.now(),
      text: event,
      createdAt: new Date()
    });
  }
}
