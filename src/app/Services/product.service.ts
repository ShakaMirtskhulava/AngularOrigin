import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE:String = 'https://distribo-api.azurewebsites.net'
const JWT:String = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxOWM5NzgzNC04Y2JiLTRkNTUtMGJlMC0wOGRkM2IwYjg4NzEiLCJlbWFpbCI6InNhbXVkY2hlcmJhazIwMThAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNzM4MDM1OTEwLCJleHAiOjE3Mzg4OTk5MTAsImlhdCI6MTczODAzNTkxMCwiaXNzIjoibG9jYWxob3N0IiwiYXVkIjoibG9jYWxob3N0In0.xyQTF-kZXdiw19bndese3YsANrv8qjLD3tMMMH2irhQ";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private httpClient: HttpClient;
  constructor(HttpClient: HttpClient) {
    this.httpClient = HttpClient;
   }

  getProducts(): Observable<Product[]>{

    return this.httpClient.get<Product[]>(`${API_BASE}/v1/products`);
  }

  getProduct(id: string){
    return this.httpClient.get<Product>(`${API_BASE}/v1/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${JWT}`
      }
    });
  }

}
