import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-create-posts',
  standalone: true,
  imports: [],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css'
})
export class CreatePostsComponent {

  constructor(private router: Router) {} //created a manual route to see the component

  navigateToComponent() {
    this.router.navigate(['/create-posts']); //url to go to
  }
}
