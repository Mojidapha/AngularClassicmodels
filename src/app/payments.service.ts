import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Payments } from './Payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private AllPaymentsUrl = 'http://localhost:8080/classicmodels/api/allPayments';

  constructor(
    private http : HttpClient
  ) { }

  getPayments(): Observable<Payments[]>{
    return this.http.get<Payments[]>(this.AllPaymentsUrl)
    .pipe(
      tap(_ => console.log('fetched Payments')),
      catchError(this.handleError('getPayments',[]))
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

