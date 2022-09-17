import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this._productService.create(this.product).subscribe(() => {
      console.log('passou aqui')
      this._productService.showMessage('Produto criado com sucesso!');
      this._router.navigate(['/products'])
    });
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }
}
