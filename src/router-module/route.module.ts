import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { ProductsComponent } from "src/app/products/products.component";
import { FirstComponent } from "src/first-component/first.component";
import { SecondComponent } from "src/second-component/second.component";


const routes : Routes =[
  {path:'', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'products',component:ProductsComponent}
]

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
