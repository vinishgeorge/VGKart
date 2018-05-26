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

  
  
  constructor(private dataService: DataService,private http:Http) { }

  ngOnInit() {

   
  
    

  }

 

  getItem(){
    return this.dataService.getItem();
  }
}
