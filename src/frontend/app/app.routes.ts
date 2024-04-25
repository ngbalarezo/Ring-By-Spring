import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
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
  },
];
