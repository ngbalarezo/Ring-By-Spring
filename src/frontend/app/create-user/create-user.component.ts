import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from "../../../models/user";
import { UserService } from '../services/user.service';
//import { CreatePosts } from '../create-posts/create-posts.component';

@Component({
  selector: 'ng-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})


export class CreateUserComponent {

  constructor(private userService: UserService, private router: Router) {}

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  gender: string = '';
  description: string = '';
  profilePicture: string = '';
  interest1: string = '';
  interest2: string = '';
  interest3: string = '';

  /*
  const validDOB = this.dob;
  validateDate(validDOB) {
    const regex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    if (regex.test(dob) == true){
      return true;
    }
    else if (regex.test(dob) == false) {
      return false;
    }
  }
  */

  save(): void {
    const toSave: User = {
      firstName: this.lastName,
      lastName: this.lastName,
      dob: new Date(this.dob),
      gender: this.gender,
    }
    if (this.description) {
      toSave.description = this.description;
    }
    if (this.profilePicture) {
      toSave.profilePicture = this.profilePicture;
    }
    if (this.interest1) {
      toSave.interest1 = this.interest1;
    }
    if (this.interest2) {
      toSave.interest2 = this.interest2;
    }
    if (this.interest3) {
      toSave.interest3 = this.interest3;
    }
    this.userService.createUser(toSave).subscribe(user => {
      console.log('Saved ',user,', returning home.');
      this.router.navigate(['/']);
    });
  }
}
