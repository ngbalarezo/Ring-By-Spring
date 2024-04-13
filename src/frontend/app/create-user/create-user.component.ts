import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, EmailValidator } from '@angular/forms';
import { User } from "../../../models/user";
import { UserService } from '../services/user.service';
//import { first, last } from 'rxjs';
//import { CreatePosts } from '../create-posts/create-posts.component';

@Component({
  selector: 'ng-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent {

  constructor(private userService: UserService, private router: Router) {}
  
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userEmail: new FormControl(EmailValidator.toString(), Validators.required),
    dob: new FormControl(new Date().toISOString().slice(0, 10), Validators.required),
    gender: new FormControl('', Validators.required),
    description: new FormControl(''),
    profilePicture: new FormControl(''),
    interest1: new FormControl(''),
    interest2: new FormControl(''),
    interest3: new FormControl(''),

  });

  //!FIXME: ask about 
  save(): void {
    const firstName = this.userForm.value.firstName!;
    if (!firstName) {
      throw "First name required!"  
    }
    const lastName = this.userForm.value.lastName!;
    if (!lastName) {
      throw "Last name required!"
    }
    const userEmail = this.userForm.value.userEmail!;
    if (!userEmail) {
      throw "Email required!"
    }
    const dob = this.userForm.value.dob!;
    if (!dob) {
      throw "Date of birth required!"
    }
    const gender = this.userForm.value.gender!;
    if (!gender) {
      throw "Gender required!"
    }
    const description = this.userForm.value.description!;
    const profilePicture = this.userForm.value.profilePicture!;
    const interest1 = this.userForm.value.interest1!;
    const interest2 = this.userForm.value.interest2!;
    const interest3 = this.userForm.value.interest3!;

    const newUser: User = {
      firstName: firstName,
      lastName: lastName,
      userEmail: userEmail,
      dob: dob,
      gender: gender,
      description: description,
      profilePicture: profilePicture,
      interest1: interest1,
      interest2: interest2,
      interest3: interest3,
      //!FIXME: ask about posts array
    }

    //!FIXME: ASK ABOUT ERROR MESSAGE DISPLAY. MESSAGES DISPLAY IN INSPECT PAGE BUT NOT IN MAIN PAGE

    this.userService.createUser(newUser).subscribe(user => {
      console.log('Saved ',user,', returning home.');
      this.router.navigate(['/']);
    });

  } 
}
