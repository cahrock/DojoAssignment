import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Product} from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    product: Product;

  constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  save(): void{
      this.productService.update(this.product)
      .then(() => this.goBack());
  }

  goBack(){
      this.location.back();
  }

}
