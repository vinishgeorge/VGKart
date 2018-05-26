import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent implements OnInit {

  constructor(private http:Http) { }
  private itemForm: FormGroup;
  private itemObject= {"value":"","name":""};
  
  ngOnInit() {
    this.itemForm= new FormGroup({
      itemName:new FormControl(''),
      itemValue:new FormControl()
    })
  }

  addItem() {
    this.itemObject= {"value":"","name":""};
    this.itemObject.name=this.itemForm.controls["itemName"].value;
    this.itemObject.value=this.itemForm.controls["itemValue"].value;
    console.log(this.itemObject);
    this.http.post("http://localhost:4000/products",this.itemObject).subscribe((resp:Response)=>{
      alert("product added");
    });
  }
}
