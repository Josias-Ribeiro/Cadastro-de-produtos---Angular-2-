import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) {}
  private _baseUrl = 'http://localhost:3001/products'

  create(product: Product): Observable<Product>{
    return this._http.post<Product>(this._baseUrl, product)
  }

  delete(id: string | null): Observable<Product>{
    const url = `${this._baseUrl}/${id}`
    return this._http.delete<Product>(url)
  }

  read(): Observable<Product[]>{
    return this._http.get<Product[]>(this._baseUrl)
  }

  readById(id: string | null): Observable<Product>{
    const url = `${this._baseUrl}/${id}`
    return this._http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this._baseUrl}/${product.id}`
    return this._http.put<Product>(url,product)
  }

  showMessage(msg: string): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
