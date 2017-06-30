import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }                from '../product-list/product';
import { ProductService }         from '../product-list/product.service';
// import {products} from '../product-list/in-memory-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
     products: Product;
     constructor(
       private productService: ProductService,
       private router: Router) { }

  add(): void {
    // product = product.;
    // if (!product) { return; }
    this.productService.create(this.products)
      .then(product => {
        this.products.push(product);
        this.router.navigate(['./products'])
        // this.selectedHero = null;
      });
  }

  ngOnInit() {
  }

}
