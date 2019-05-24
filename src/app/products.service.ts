import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private AllProductsUrl = 'http://localhost:8080/classicmodels/api/allProducts';

  constructor(
    private http : HttpClient
  ) { }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.AllProductsUrl)
    .pipe(
      tap(_ => console.log('fetched Products')),
      catchError(this.handleError('getProducts',[]))
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

