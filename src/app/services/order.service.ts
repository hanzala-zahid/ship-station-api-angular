// order.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'https://ssapi.shipstation.com/orders';  // URL to ShipStation API orders endpoint
  private headers = new HttpHeaders({
    'Authorization': 'YOUR_API_KEY:YOUR_API_SECRET',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  /* GET orders from the server */
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl, { headers: this.headers })
      .pipe(
        tap(_ => console.log('fetched orders')),
        catchError(this.handleError<any[]>('getOrders', []))
      );
  }

  /* Handle Http operation that failed */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
