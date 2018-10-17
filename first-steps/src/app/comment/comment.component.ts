import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() commentOutput: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() { }

  delete(comment: Comment) {
    this.commentOutput.emit(comment);
  }

}
