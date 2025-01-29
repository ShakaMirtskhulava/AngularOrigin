import { Component } from '@angular/core';
import { ProductBaseModule } from '../product-base/product-base.module';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductBaseModule,RouterOutlet,CommonModule],
})

export class AppComponent {

  constructor() {
  }

}
