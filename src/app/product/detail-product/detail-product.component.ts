import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  private itemList: Array<object> = new Array<object>();
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("http://localhost:4000/products").subscribe((resp : Response)=>{
      this.itemList=resp.json();
      })
  }

}
