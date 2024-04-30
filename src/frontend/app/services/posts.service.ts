import { Injectable } from '@angular/core';
import { Post } from '../../../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('/api/posts/create', post)
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts/');
  }

}