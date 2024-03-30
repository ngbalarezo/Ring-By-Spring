import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from "../../../models/user";
import { UserService } from '../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ng-list-users',
  standalone: true,
  imports: [UserService, NgFor],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  
  constructor(private userService: UserService, private router: Router) {}

  users = this.userService.users;

}
