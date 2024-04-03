import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO Connect to the webserver and delete this.
  USERS: User[] = [
    {userID: -3, firstName: 'Bugs', lastName: 'Bunny', gender: 'Male', dob: new Date('06/27/1940')},
    {userID: -2, firstName: 'Daffy', lastName: 'Duck', gender: 'Male', dob: new Date('04/17/1937')},
    {userID: -1, firstName: 'Tina Russo', lastName: 'Duck', gender: 'Female', dob: new Date('12/02/1987')},

  ];
  nextId: number = 1;
  constructor() { }

  createUser(user: User): Observable<User> {
    // TODO: Call the webserver.
    user.userID = this.nextId++;
    this.USERS.push(user);

    return of(user);
  }

  getUsers(): Observable<User[]> {
    const users = of(this.USERS);
    return users;
  }
}