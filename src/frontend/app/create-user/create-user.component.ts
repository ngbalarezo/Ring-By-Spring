import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { CreatePosts } from '../create-posts/create-posts.component';
import { User } from "../../../models/user";


@Component({
  selector: 'ng-create-user',
  standalone: true,
  imports: [],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent {
  userForm = new FormGroup({
    userID: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl(new Date().toISOString().slice(0, 10), Validators.required),
    gender: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    profilePicture: new FormControl('', Validators.required),
    interest1: new FormControl('', Validators.required),
    interest2: new FormControl('', Validators.required),
    interest3: new FormControl('', Validators.required)
  });

  saveUser() {
    let userID = this.userForm.value.userID;
    if (!userID) {
      throw "UserID is required!";
    }
    let firstName = this.userForm.value.firstName;
    if (!firstName) {
      throw "First name is required!";
    }
    let lastName = this.userForm.value.lastName;
    if (!lastName) {
      throw "Last name is required!";
    }
    let dob = this.userForm.value.dob;
    if (!dob) {
      throw "Date of birth is required!";
    }
    let gender = this.userForm.value.gender;
    if (!gender) {
      throw "Gender is required!";
    }
    let description = this.userForm.value.description;
    if (!description) {
      throw "Description is required!";
    }
    let profilePicture = this.userForm.value.profilePicture;
    if (!profilePicture) {
      throw "Profile picture is required!";
    }
    let interest1 = this.userForm.value.interest1;
    if (!interest1) {
      throw "Interest 1 is required!";
    }
    let interest2 = this.userForm.value.interest2;
    if (!interest2) {
      throw "Interest 2 is required!";
    }
    let interest3 = this.userForm.value.interest3;
    if (!interest3) {
      throw "Interest 3 is required!";
    }
    let user: User = {userID: userID!, firstName: firstName!, lastName: lastName!, dob: dob!, gender: gender!, description: description!, profilePicture: profilePicture!, interest1: interest1, interest2: interest2, interest3: interest3};

    console.log("Save");
  }
}
