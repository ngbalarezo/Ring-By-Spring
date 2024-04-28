import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { passwordMatchValidator } from '../../shared/password-match.directive';


@Component({
  selector: 'ng-register',
  standalone: true,
  imports: [
    RouterModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm  = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z ,.'-]+$/i)]],
    lastName: ['', Validators.required, Validators.pattern(/^[A-Z][a-z ,.'-]+$/i)],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  constructor(private fb: FormBuilder){}

  get firstName() { return this.registerForm.controls['firstName']; }

  get lastName() { return this.registerForm.controls['lastName']; }

  get email() { return this.registerForm.controls['email']; }

  get password() { return this.registerForm.controls['password']; }

  get confirmPassword() { return this.registerForm.controls['confirmPassword']; }

}
