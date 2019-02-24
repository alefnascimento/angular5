import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/comments')
      .pipe(
        map(response => response as [])
      );
  }
}
