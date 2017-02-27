import { SharedModule } from './../../shared/shared/shared.module';
import { ProductService } from './../product.service';
import { ProductGuardService } from './../product-guard.service';
import { StarComponent } from './../../shared/star/star.component';
import { ProductFilterPipe } from './../product-filter.pipe';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductListComponent } from './../product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: `products`, component: ProductListComponent},
      {path: `product/:id`, component: ProductDetailComponent,
        canActivate: [ ProductGuardService] }
    ]),
    SharedModule
  ],
  declarations: 
  [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
  ],
  providers: [ ProductGuardService, ProductService]
})
export class ProductModule { }
