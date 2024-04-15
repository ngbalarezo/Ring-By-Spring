import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //takes a user, increments the userID and pushes it to User[]
  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users/create', user);
  }

  //returns User[]
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users/');
  }

}