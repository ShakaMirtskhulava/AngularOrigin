import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from '../Services/product.service';
import { provideHttpClient } from '@angular/common/http';
import { ProductTemplateFormComponent } from './product-template-form/product-template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,ProductDetailComponent, ProductTemplateFormComponent
  ],
  imports: [
    CommonModule, NgFor, FormsModule
  ],
  exports: [
    ProductListComponent,ProductDetailComponent, ProductTemplateFormComponent
  ],
  providers: [
    provideHttpClient(),
    ProductService
  ]
})

export class ProductBaseModule { }