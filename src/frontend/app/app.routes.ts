import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { ListPostComponent } from './list-post/list-post.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    //canActivate:[AuthGuard]
    children: [
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
        path: '',
        component: ListPostComponent
      }
    ]
  }

];
