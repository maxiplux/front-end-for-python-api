import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {

  }
  public save(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/items`, product);
  }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/items`);
  }


}
