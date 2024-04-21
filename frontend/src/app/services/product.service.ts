import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products`, productData);
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }

  searchProducts(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/search/${keyword}`);
  }

  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/products/${productId}`, productData);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/products/${productId}`);
  }

  addToWishlist(productId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products/wishlist`, { productId });
  }

  rateProduct(productId: string, star: number, comment: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products/rating`, { productId, star, comment });
  }
}
