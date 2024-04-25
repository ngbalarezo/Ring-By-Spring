import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';

export const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
  
  {
    path: 'create-post',
    component: CreatePostsComponent,
  },

  {
    path: 'list-users',
    component: ListUsersComponent,
  },
  
  {
    path: 'list-post',
    component: ListPostComponent
  }

];
