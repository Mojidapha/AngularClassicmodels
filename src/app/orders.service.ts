import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Orders } from './Orders';

const httpOption = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  private AllOrdersUrl = 'http://localhost:8080/classicmodels/api/allOrders';
  private AddOrdersUrl = 'http://localhost:8080/classicmodels/api/addOrders';
  private EditOrdersUrl = 'http://localhost:8080/classicmodels/api/editOrders?orderNumber=';

  constructor(
    private http : HttpClient
  ) { }

  getOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.AllOrdersUrl)
    .pipe(
      tap(_ => console.log('fetched Orders')),
      catchError(this.handleError('getOrders',[]))
    )
}

  AddOrders(orders): Observable<any>{
    return this.http.post<any>(this.AddOrdersUrl,orders,httpOption)
    .pipe(
      tap(_ => console.log('fetched orders')),
      catchError(this.handleError('AddOrders',[]))
    )
  }

  editOrders(orderNumber): Observable<any>{
    return this.http.get<any>(this.EditOrdersUrl+orderNumber)
    .pipe(
      tap(_ => console.log('fetched orders')),
      catchError(this.handleError('editOrders',[]))
    )
}

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(${operation} failed: ${error.message});

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
