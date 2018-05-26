import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Http,Response} from '@angular/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DataService]
})
export class ProductComponent implements OnInit {

  private itemList: Array<object> = new Array<object>();
  private itemForm: FormGroup;
  private itemObject= {"value":"","name":""};
  constructor(private dataService: DataService,private http:Http) { }

  ngOnInit() {

    //this.itemList = this.dataService.getItem();
    this.http.get("http://localhost:4000/products").subscribe((resp : Response)=>{
    this.itemList=resp.json();
    })
  ;

    this.itemForm= new FormGroup({
      itemName:new FormControl(''),
      itemValue:new FormControl()
    })

  }

  addItem() {
    this.itemObject= {"value":"","name":""};
    this.itemObject.name=this.itemForm.controls["itemName"].value;
    this.itemObject.value=this.itemForm.controls["itemValue"].value;
    this.dataService.addItem(this.itemObject);
    //this.itemList=this.getItem();
  }

  getItem(){
    return this.dataService.getItem();
  }
}
