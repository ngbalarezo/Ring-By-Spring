import { Injectable } from '@angular/core';
import { Posts } from '../../../models/posts';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Posts[] = [];

  constructor(private http: HttpClient) {}

  createPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>('/api/posts/create', post)
  }

  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('/api/posts/');
  }

}