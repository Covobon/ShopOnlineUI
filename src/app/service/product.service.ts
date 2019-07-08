import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiProduct: string;

  constructor(private http: HttpClient) {
    this.apiProduct = 'http://localhost:8080/api/product';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiProduct);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.apiProduct, product);
  }
}
