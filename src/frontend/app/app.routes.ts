import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatePostsComponent } from './create-posts/create-posts.component'; //added create posts component route

export const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent,
  },


    { path: 'create-posts', component: CreatePostsComponent }
];