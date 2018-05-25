import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {

  private signupform: FormGroup;
  private gender:Array<Object>=new Array();
  constructor() { }

  ngOnInit() {
    var genderObj=new Object();
    genderObj["value"]="M";
    genderObj["label"]="Male";
    this.gender.push(genderObj);
    var genderObj=new Object();
    genderObj["value"]="F";
    genderObj["label"]="Female";
    this.gender.push(genderObj);
    var genderObj=new Object();
    genderObj["value"]="T";
    genderObj["label"]="Transgender";
    this.gender.push(genderObj);
    this.signupform = new FormGroup(
      {
        userName: new FormControl(''),
        password: new FormControl(''),
        confirmPassword:new FormControl(''),
        gender: new FormControl(''),
        terms: new FormControl(''),
        email: new FormControl('')
      }

    );
  }

}
