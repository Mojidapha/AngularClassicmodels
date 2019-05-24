import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Offices } from './offices';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {

  private AllOfficesUrl = 'http://localhost:8080/classicmodels/api/allOffices';

  constructor(
    private http : HttpClient
  ) { }

  getOffices(): Observable<Offices[]>{
    return this.http.get<Offices[]>(this.AllOfficesUrl)
    .pipe(
      tap(_ => console.log('fetched Offices')),
      catchError(this.handleError('getOffices',[]))
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

