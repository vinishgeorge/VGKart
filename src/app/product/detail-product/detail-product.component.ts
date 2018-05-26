import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  private item: Object = null;
  private itemList: Array<object> = new Array<object>();
  private header: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //const url=`${"http://localhost:4000/products/"}${""}`;
    this.activatedRoute.params.subscribe(params => {
      if (params.hasOwnProperty("id")) {
       this.getItemDetail(params.id);
      } else {
        this.getItemDetails();
      }

    })


  }

  deleteItem(id) {

    console.log(id);
    if (confirm("Are you sure?")) {
      this.http.delete("http://localhost:4000/products/" + id, { headers: this.header }).toPromise().then(() => {
        this.getItemDetails();
      });
    }

  }

   getItemDetail(id){
    this.http.get("http://localhost:4000/products/" + id).subscribe((resp: Response) => {
      this.item = resp.json();
    });
   }

  getItemDetails(){
    this.http.get("http://localhost:4000/products").subscribe((resp: Response) => {
      this.itemList = resp.json();
    })
  }
}
