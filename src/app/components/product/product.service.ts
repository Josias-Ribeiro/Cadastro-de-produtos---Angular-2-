import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) {}
  private _baseUrl = 'http://localhost:3001/products'

  create(product: Product): Observable<Product>{
    return this._http.post<Product>(this._baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(error: any): Observable<any>{
    this.showMessage('Ocooreu um erro!', true)
    return EMPTY
  }

  delete(id: string | null): Observable<Product>{
    const url = `${this._baseUrl}/${id}`
    return this._http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]>{
    return this._http.get<Product[]>(this._baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string | null): Observable<Product>{
    const url = `${this._baseUrl}/${id}`
    return this._http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product>{
    const url = `${this._baseUrl}/${product.id}`
    return this._http.put<Product>(url,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }
}
