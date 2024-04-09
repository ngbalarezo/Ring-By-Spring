import { Injectable } from '@angular/core';
import { Posts } from '../../../models/posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Posts[] = [];

  constructor() {}

  createPost(post: Posts): void {
    this.posts.push(post);
    console.log(post)
  }

  getAllPosts(): Observable<Posts[]> {
    return of(this.posts);
  }

}