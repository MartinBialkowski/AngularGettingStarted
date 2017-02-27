import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private productUrl = 'api/products/products.json'
  getProducts() : Observable<IProduct[]>
  {
    return this.http.get(this.productUrl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(`All: ${JSON.stringify(data)}`))
      .catch(this.HandleError)
  }

  getProduct(id: number) : Observable<IProduct>
  {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }

  private HandleError(error: Response)
  {
    console.error(error);
    return Observable.throw(error.json().error || `Server error`);
  }

  constructor(private http: Http) { }

}
