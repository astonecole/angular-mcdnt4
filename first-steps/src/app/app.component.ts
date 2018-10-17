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
  comments: Comment[] = [
    new Comment(Date.now(), 'blah blah blah', new Date('2018-10-12'))
  ];

  addMessage(event) {
    this.comments.push({
      id: Date.now(),
      text: event,
      createdAt: new Date()
    });
  }

  removeComment(comment: Comment) {
    const pos = this.comments.findIndex(c => c.id === comment.id);
    this.comments.splice(pos, 1);
  }
}
