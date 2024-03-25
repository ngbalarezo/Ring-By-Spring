import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Posts } from '../../../models/posts';

@Component({
  selector: 'ng-create-posts',
  standalone: true,
  imports: [],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostsComponent {

  constructor(private router: Router, private postService: PostsService) {} //created a manual route to see the component


  getCurrentDateTime(): string {
    return new Date().toISOString();
  } //gets current date and time for new posts

  createPost(content: string, image?: string): void {
    // get current date and time
    const timeOfPost = this.getCurrentDateTime();
    
    // create new post object
    const newPost: Posts = {
        userid: 111,
        content,
        timeOfPost,
        image
    };

    this.postService.createPost(newPost);
}



}
