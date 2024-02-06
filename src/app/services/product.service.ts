import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './endPints';
import { Product, ProductList } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   url=url
  constructor(
    private http:HttpClient
  ) { }

  getAllProducts():Observable<ProductList>{
    return this.http.get<ProductList>(`${url}/products/`)
  }
  getSearchProduct(key:string):Observable<ProductList>{
    return this.http.get<ProductList>(`${url}/products/search?q=${key}`)
  }
  getProductDetails(productId: number): Observable<any> {
    const url = `${this.url}/products/${productId}`;
    return this.http.get(url);
  }
  signUp(form:any):Observable<any>{
  
    return this.http.post<any>(`${url}/users/add`,form)
  }
}
