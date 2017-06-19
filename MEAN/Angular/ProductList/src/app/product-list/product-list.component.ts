import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService) { }

    getProducts(): void {
      this.productService.getProducts().then(products => this.products = products);

      }
    ngOnInit(): void {
          this.getProducts();
          console.log(this.products)
      }

    onSelect(product: Product): void{
          this.selectedProduct = product;
      }


}
