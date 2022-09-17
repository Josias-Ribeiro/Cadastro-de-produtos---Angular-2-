import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void{
    this._productService.read().subscribe((res) => {
      this.products = res;
    });
  }

  delete(id: string| null): void {
    this._productService.delete(id)
    .pipe(finalize(() => this.carregarProdutos()))
    .subscribe(() => {
      this._productService.showMessage('Produto excluído com sucesso!')
    })
  }
}
