import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-template-form',
  templateUrl: './product-template-form.component.html',
  styleUrls: ['./product-template-form.component.css'],
  standalone: false
})
export class ProductTemplateFormComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProduct("9faf13de-50f8-41ac-0195-08dd3b0dab42").subscribe((product: Product) => {
      this.product = product;
    });
  }

}
