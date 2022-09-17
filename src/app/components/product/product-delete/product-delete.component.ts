import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  id = this._route.snapshot.paramMap.get('id')

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {   
    this._productService.readById(this.id).subscribe((product) => this.product = product)
  }

  cancel(): void {
    this._router.navigate(['/products']);
  }

  deleteProduct(): void {
    this._productService.delete(this.id).subscribe(()=> {
      this._productService.showMessage('Produto removido com sucesso!')
      this._router.navigate(['/products']);
    })
  }

}
