import { ProductModule } from './product-list/product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { UserComponent } from './FormsTutorial/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: `welcome`, component: WelcomeComponent},
      {path: `user`, component: UserComponent},
      {path: `**`, redirectTo: `welcome`, pathMatch: `full`}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
