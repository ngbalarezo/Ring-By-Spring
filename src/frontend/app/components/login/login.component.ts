import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ng-login',
  standalone: true,
  imports: [
    RouterModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  get email() { return this.loginForm.controls['email']; }

  get password() { return this.loginForm.controls['password']; }
}
