import { ProductModule } from './product-list/product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: `welcome`, component: WelcomeComponent},
      {path: `**`, redirectTo: `welcome`, pathMatch: `full`}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
