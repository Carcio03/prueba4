import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() comments: string[] = [];
  @Output() newCommentAdded = new EventEmitter<string>();

  newComment = '';

  addComment() {
    if (this.newComment) {
      this.comments.push(this.newComment);
      this.newCommentAdded.emit(this.newComment);
      this.newComment = '';
    }
  }
}