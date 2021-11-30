import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../shared/services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  error_message = '';
  show_error_message = false;
  loginForm: FormGroup;

  listOfUsers = [
    { username: "admin@gmail.com", password: "123456" },
    { username: "kumudini@gmail.com", password: "123456" },
    { username: "user@gmail.com", password: "123456" }
  ]

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    this.show_error_message = false;
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    console.log(this.loginForm)

    if (this.loginForm.value.userName == 'admin@gmail.com' && this.loginForm.value.password == "123456") {
      this.router.navigate(['/dashboard/home']);
    }else if (this.loginForm.value.userName == 'user@gmail.com' && this.loginForm.value.password == "123456") {
      this.router.navigate(['/dashboard/home']);
    }
    else if (this.loginForm.value.userName == 'demo@gmail.com' && this.loginForm.value.password == "123456") {
      this.router.navigate(['/dashboard/home']);
    }
    else {
      this.error_message = 'User not authenticated!';
      this.show_error_message = true;
    }


  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
  }


}