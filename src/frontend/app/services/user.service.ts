import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO Connect to the webserver and delete this.
  users: User[] = [
    {firstName: 'Bugs', lastName: 'Bunny', gender: 'Male', dob: new Date('06/27/1940')},
    {firstName: 'Daffy', lastName: 'Duck', gender: 'Male', dob: new Date('04/17/1937')},
    {firstName: 'Tina Russo', lastName: 'Duck', gender: 'Female', dob: new Date('12/02/1987')},

  ];
  nextId: number = 1;
  constructor() { }

  createUser(user: User): Observable<User> {
    // TODO: Call the webserver.
    user.userID = this.nextId++;
    this.users.push(user);

    return of(user);
  }
}