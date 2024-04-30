import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../../../models/post';
import { NgFor } from '@angular/common';


@Component({
  selector: 'ng-list-post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent implements OnInit {
  
  constructor(private postsService: PostsService) {}
  
  posts: Post[] = []

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      if (!posts || posts.length === 0) {
        const newPost: Post = 
      { 
        postID: '1', 
        content: 'Dummy content 1', 
        timeOfPost: '1999', 
        userid: 'user1' 
      };
      this.posts.push(newPost);
    }
    });
  }


}
