import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';

export const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent,
  },


  {
    path: 'create-post',
    component: CreatePostsComponent,
  },

];
