import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Cart } from './const/cart';

const httpOptions = {
  header: new HttpHeaders({ 'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(private http: HttpClient) { }

  getCartBuy(): Observable<Cart> {
    return this.http.get<Cart>('api/cart').pipe(
      catchError(this.handleError('getCartBuy', {buy: 0} ))
    )
      
  }

  private handleError<T> (operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }
  
    
  
}
