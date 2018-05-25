
import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

    
const route:Routes=[
    {path:"",component:HomeComponent},
    {path:"",component:ItemComponent},
    {path:"",component:ProductComponent},
    {path:"",component:RegisterComponent},
    {path:"",component:CartComponent}
  
  ];

export class myRoute { 


}