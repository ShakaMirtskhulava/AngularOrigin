import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  favouriteProductName!: string;
  newProduct: Product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    stock: 0,
    images: [{ url: '' }]
  };

  constructor(private productService: ProductService) {
  }

  createProduct(form: NgForm) {
    if (form.valid) {
      this.newProduct.id = this.generateGUID();
      console.log('Product created: ', this.newProduct);
    }
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  ngOnInit() {
    this.productService.getProduct("9faf13de-50f8-41ac-0195-08dd3b0dab42").subscribe((product: Product) => {
      this.product = product;
    });
  }

}
