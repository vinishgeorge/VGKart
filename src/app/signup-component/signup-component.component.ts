import { Component, OnInit } from '@angular/core';
import {User} from './User';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  constructor() { }

  private gender:Array<Object>=new Array();
  private user:User;
  private JSON= JSON;

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
    this.init();

  }

  init(){
    this.user= new User({userName:"",passwordGrp:{password:"",confirmPassword:""},email:"",gender:"",term:false});

  }


  registeruser({value,valid}:{value:User,valid:boolean}){

    if(valid){
      this.user=value;
    }
  }
}
