import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/api/order'; // Change the URL as needed
  private authToken = 'Tdiscount2024'; // JWT token

  constructor(private http: HttpClient) { }

  // Create a new order
  createOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, orderData, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get all orders
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get an order by its ID
  getOrderById(orderId: string): Observable<any> {
    const url = `${this.baseUrl}/${orderId}`;
    return this.http.get<any>(url, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update an order
  updateOrder(orderId: string, orderData: any): Observable<any> {
    const url = `${this.baseUrl}/${orderId}`;
    return this.http.put<any>(url, orderData, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete an order
  deleteOrder(orderId: string): Observable<any> {
    const url = `${this.baseUrl}/${orderId}`;
    return this.http.delete<any>(url, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get headers with JWT token
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
  }

  // Error handling
  private handleError(error: any): Observable<any> {
    console.error('API Error:', error);
    return throwError(error);
  }
}
