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

  showMessage(msg: string): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
