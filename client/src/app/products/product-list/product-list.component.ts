import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/i-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[]
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    this.productsService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

}
