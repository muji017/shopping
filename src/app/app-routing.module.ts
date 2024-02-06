import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductListComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"signUp",component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
