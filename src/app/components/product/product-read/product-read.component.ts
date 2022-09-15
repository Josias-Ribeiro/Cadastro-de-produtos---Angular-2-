import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  products : Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.read().subscribe((res) =>{
      this.products = res;

      console.log(res)


    } )
  }

}
