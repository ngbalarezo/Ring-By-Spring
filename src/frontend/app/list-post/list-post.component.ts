import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Posts } from '../../../models/posts';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-list-post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {
  
  constructor(private postsService: PostsService) {}
  
  posts: Posts[] = []

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


}
