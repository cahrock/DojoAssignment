import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Product} from './product';
// import {PRODUCTS} from './product-object';

@Injectable()
export class ProductService {
     private headers = new Headers({'Content-Type': 'application/json'});
     private productsUrl = 'api/products';  // URL to web api

     constructor(private http: Http) { }

    getProducts(): Promise<Product[]>{
        return this.http.get(this.productsUrl)
        .toPromise()
        .then(response => response.json().data as Product[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    // getProduct(id: number): Promise<Product> {
    //     return this.getProducts()
    //            .then(products => products.find(product => product.id === id));
    // }

    getProduct(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

    delete(id: number): Promise<Product>{
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Product)
        .catch(this.handleError);
    }

    create(product: Product): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({product: product}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Product)
      .catch(this.handleError);
    }

    update(product: Product): Promise<Product>{
        const url = `${this.productsUrl}/${product.id}`
        return this.http
           .put(url, JSON.stringify(product), {headers: this.headers})
           .toPromise()
           .then(() => product)
           .catch(this.handleError);
    }
}
