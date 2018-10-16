import { Component } from '@angular/core';

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
  comments: {text: string, createdAt: Date}[] = [];

  addMessage(event) {
    this.comments.push({
      text: event,
      createdAt: new Date()
    });
  }
}
