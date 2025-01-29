import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  standalone: false
})

export class ProductDetailComponent implements OnInit{
    @Input()
    detail!: Product;

    @Output()
    remove: EventEmitter<Product> = new EventEmitter<Product>();

    constructor() {

    }
    
    ngOnInit(): void {
    }

    onRemove(){
      this.remove.emit(this.detail);
    }

}
