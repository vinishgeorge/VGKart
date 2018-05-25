import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const route: Routes = [
  { path: "", component: HomeComponent },
  { path: "item", component: ItemComponent },
  { path: "product", component: ProductComponent },
  {
    path: "register", component: RegisterComponent, 
    children: [{ path: "signup", component: SignupComponentComponent },
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
    SignupComponentComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
