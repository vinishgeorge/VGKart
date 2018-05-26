import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http,Response ,Headers} from '@angular/http';
import { ActivatedRoute,Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent implements OnInit {

  constructor(private http:Http,private activatedRoute:ActivatedRoute,private router:Router) { }
  private itemForm: FormGroup;
  private itemObject;
  private isUpdate:boolean=false;
  private btnText:string="Add Item";
  private header:Headers= new Headers({'Content-Type':'application/json'});
  ngOnInit() {
    this.inIt();
    this.activatedRoute.params.subscribe(params=>{
      if(params.hasOwnProperty("id")){
        this.btnText="Update item";
        this.isUpdate=true;
        this.http.get("http://localhost:4000/products/"+params.id).subscribe((resp: Response) => {
          this.itemObject = resp.json();
          this.itemForm.patchValue(this.itemObject);
        });
        
      }else{
        this.btnText="Add Item";
        
      }
    });


    
  }

  addItem() {
    if(this.isUpdate){
     
      this.itemObject.name=this.itemForm.controls["name"].value;
      this.itemObject.value=this.itemForm.controls["value"].value;
      this.http.put("http://localhost:4000/products/"+this.itemObject.id,this.itemObject,{headers:this.header}).toPromise().then(()=>{
        this.router.navigate(["/product/details"]);
      });
    }else{
      this.itemObject= {"value":"","name":""};
      this.itemObject.name=this.itemForm.controls["name"].value;
      this.itemObject.value=this.itemForm.controls["value"].value;
      console.log(this.itemObject);
      this.http.post("http://localhost:4000/products",this.itemObject).subscribe((resp:Response)=>{
        this.router.navigate(["/product/details"]);
      });
    }
    
  }

 

  inIt(){
    this.itemForm= new FormGroup({
      name:new FormControl(''),
      value:new FormControl()
    });
  }
}
