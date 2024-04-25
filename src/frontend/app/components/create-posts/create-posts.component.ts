import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../../../models/posts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ng-create-posts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostsComponent {

  constructor(private router: Router, private postService: PostsService) {} //created a manual route to see the component

  formData = {
    content: '',
    image: ''
  }
  createPost(): void {
    // get current date and time
    const timeOfPost = new Date().toISOString(); //gets current date and time for new posts
    
    // create new post object
    const newPost: Posts = {
        postID: '#username.date', //in order for post id to be unique - userid is already unique and date is basically unique, simple way of making it unique
        userid: 'username',
        content: this.formData.content,
        timeOfPost,
        image: this.formData.image
    };

    this.postService.createPost(newPost);
    console.log('Saved ',newPost,', returning home.');
    this.router.navigate(['/']);
}



}
