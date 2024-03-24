import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO Connect to the webserver and delete this.
  users: User[] = [{
    firstName: 'Kyle',
    lastName: 'Crocodile',
    gender: 'Male',
    dob: '01/20/2005',
  }];
  nextId: number = 1;
  constructor() { }

  createUser(user: User): Observable<User> {
    // TODO: Call the webserver.
    user.userID = this.nextId++;
    this.users.push(user);

    return of(user);
  }
}