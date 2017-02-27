import { ProductService } from './../product.service';
import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  PageTitle: string = "Product Detail"
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductService) 
  {
  }

  ngOnInit() 
  {
    
    this.sub = this.route.params.subscribe( params => 
    {
      let id = +params[`id`];
      this.productService.getProduct(id)
        .subscribe(data => this.product = data,
        error => this.errorMessage = <any>error);
    })
  }

  OnBack()
  {
    this.router.navigate([`/products`]);
  }

}
