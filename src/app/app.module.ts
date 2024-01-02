import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from 'src/server/server.component';
import { FirstComponent } from 'src/first-component/first.component';
import { SecondComponent } from 'src/second-component/second.component';
import { AppRoutingModule } from 'src/router-module/route.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFormComponent } from './add-form/add-form.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FirstComponent,
    SecondComponent,
    AddFormComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
