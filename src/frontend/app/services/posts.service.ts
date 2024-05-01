import { Injectable } from '@angular/core';
import { Post } from '../../../models/post';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('/api/posts/create', post)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle error
          console.error('An error occurred while creating post:', error);
          return throwError('Failed to create post.');
        })
      );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts/')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle error
          console.error('An error occurred while fetching posts:', error);
          return throwError('Failed to fetch posts.');
        })
      );
  }
}