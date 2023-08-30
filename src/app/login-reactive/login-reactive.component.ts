import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  form = this.fb.group({
    email: ["", {updateOn: 'blur', validators: [Validators.required, Validators.email]}],
    password: ["", [Validators.required, Validators.minLength(8),createPasswordStrengthValidator()]]
  })
  get email() {
    return this.form.controls['email']
  }
  get password() {
    return this.form.controls['password']
  }
  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit() {

  }
  reset() {
    this.form.reset()
  }

}
