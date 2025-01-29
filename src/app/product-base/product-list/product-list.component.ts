import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: false
})

export class ProductListComponent implements OnInit {
    products!: Product[];

    constructor(private router: Router, private productService: ProductService) {
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe((products:Product[]) =>{
            console.log(products);
            this.products = products;
        });
    }

    handleRemove($event: Product) {
        this.products = this.products.filter(product => product.id !== $event.id);
    }

    handleReset(){
        this.productService.getProducts().subscribe((products:Product[]) =>{
            this.products = products;
        });
    }

}
