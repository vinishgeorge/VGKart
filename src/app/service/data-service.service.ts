import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  genderList:Array<object>= new Array({"value":"M","label":"Male"},{"value":"F","label":"Female"});
  private itemList:Array<object>= new Array({"value":"A","name":"Apple"},{"value":"M","name":"Motorola"});
  private http:Http;
  constructor() { }

  addGender(gender){
    this.genderList.push(gender);
  }
  addItem(item){
    this.itemList.push(item);
  }
  getItem(){
    
  }
}
