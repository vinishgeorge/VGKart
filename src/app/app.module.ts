import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { DataService } from './service/data-service.service';
import {  HttpModule } from '@angular/http';


const route: Routes = [
  { path: "", component: HomeComponent },
  { path: "item", component: ItemComponent },
  { path: "product", component: ProductComponent,
  children:[{path:"add",component:ProductComponent},
  {path:"details",component:ProductComponent}]
},
  {
    path: "register", component: RegisterComponent, 
    children: [{ path: "signup", component: SignupReactiveComponent },
    { path: "login", component: LoginComponentComponent }]
  },
  { path: "cart", component: CartComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    RegisterComponent,
    CartComponent,
    ItemComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    SignupReactiveComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route),FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
