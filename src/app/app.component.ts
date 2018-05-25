import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VGKart';
  private navList:Array<Object>= new Array<Object>();

  ngOnInit(){
    let nav= new Object();
    nav["link"]="['/']";
    nav["name"]="Home";
    nav["active"]=true;
    this.navList.push(nav);
    nav= new Object();
    nav["link"]="['/product']";
    nav["name"]="Product";
    nav["active"]=false;
    this.navList.push(nav);
    nav= new Object();
    nav["link"]="['/register']";
    nav["name"]="Register";
    nav["active"]=false;
    this.navList.push(nav);
    nav= new Object();
    nav["link"]="['/cart']";
    nav["name"]="Cart";
    nav["active"]=false;
    this.navList.push(nav);
   
  }

}
