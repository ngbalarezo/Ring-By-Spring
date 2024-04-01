import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from "../../../models/user";
import { UserService } from '../services/user.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'ng-list-users',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  
  user: User = {
    userID: 0,
    firstName: 'Test',
    lastName: 'Dummy',
    dob: new Date('11/11/1111'),
    gender: 'Male'
  }

  selectedUser?: User;

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
