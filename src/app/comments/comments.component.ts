import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentsService: CommentService) { }

  ngOnInit() {
    this.commentsService.getComments()
      .subscribe(response => this.comments = response);
  }

}
