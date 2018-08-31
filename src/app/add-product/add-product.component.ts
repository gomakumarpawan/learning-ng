import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.test();
  }

  submitProduct(form){
    console.log(form.value);
    console.log(form);
    //form.reset();
  }
}
