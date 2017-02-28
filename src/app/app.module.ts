import { ValidationService } from './FormsTutorial/validation-service.service';
import { ProductModule } from './product-list/product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { UserComponent } from './FormsTutorial/user/user.component';
import { UserReactiveComponent } from './FormsTutorial/user-reactive/user-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    UserComponent,
    UserReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: `welcome`, component: WelcomeComponent},
      {path: `user`, component: UserComponent},
      {path: `userReactive`, component: UserReactiveComponent},
      {path: `**`, redirectTo: `welcome`, pathMatch: `full`}
    ]),
    ProductModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
