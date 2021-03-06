import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../signup-component/User';
@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {

  private signupform: FormGroup;
  private gender: Array<Object> = new Array();
  private user: Array<User> = new Array<User>();
  constructor() { }

  ngOnInit() {
    var genderObj = new Object();
    genderObj["value"] = "M";
    genderObj["label"] = "Male";
    this.gender.push(genderObj);
    var genderObj = new Object();
    genderObj["value"] = "F";
    genderObj["label"] = "Female";
    this.gender.push(genderObj);
    var genderObj = new Object();
    genderObj["value"] = "T";
    genderObj["label"] = "Transgender";
    this.gender.push(genderObj);
    this.signupform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required,  Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required,  Validators.minLength(6)]),
        gender: new FormControl('', Validators.required),
        terms: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email, Validators.required])
      }

    );
  }

  registerUser() {
    if (this.signupform.valid)
      this.user.push(this.signupform.value);
  }
}
