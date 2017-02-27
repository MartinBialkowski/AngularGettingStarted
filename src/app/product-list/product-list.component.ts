import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  isShowed: boolean = false;
  listFilter: string;
  products: IProduct[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() 
  {
    this.productService.getProducts()
      .subscribe(data => this.products = data,
      error => this.errorMessage = <any>error );
  }

  toggleImage() : void
  {
    this.isShowed = !this.isShowed;
  }

  onRatingClicked(message: string)
  {
    this.pageTitle = 'Product List: ' + message;
  }
}
