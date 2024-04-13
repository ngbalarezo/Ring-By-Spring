import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO Connect to the webserver and delete this.
  USERS: User[] = [
    {userID: 1234, firstName: 'Bugs', lastName: 'Bunny', userEmail: 'bugsbunny@warnerbros.com', gender: 'Male', dob: '06-27-1940'},
    {userID: 1235, firstName: 'Daffy', lastName: 'Duck', userEmail: 'daffyduck@warnerbros.com', gender: 'Male', dob: '04-17-1937'},
    {userID: 1236, firstName: 'Tina', lastName: 'Russo', userEmail: 'tinarusso@warnerbros.com', gender: 'Female', dob: '12-02-1987'},

  ];
  nextId: number = 1;
  constructor() { }

  //takes a user, increments the userID and pushes it to User[]
  createUser(user: User): Observable<User> {
    // TODO: Call the webserver.
    user.userID = this.nextId++;
    this.USERS.push(user);

    return of(user);
  }

  //returns User[]
  getUsers(): Observable<User[]> {
    const users = of(this.USERS);
    return users;
  }

}