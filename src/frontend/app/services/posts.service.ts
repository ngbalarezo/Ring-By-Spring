import { Injectable } from '@angular/core';
import { Posts } from '../../../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Posts[] = [];

  constructor() {}

  createPost(post: Posts): void {
    this.posts.push(post);
  }

  getAllPosts(): Posts[] {
    return this.posts;
  }

}
