import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/i-product';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productSubscription: Subscription
  get products(): IProduct[] {
    return this.productsService.products || []
  }
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    if (this.products && !this.products.length) {
      this.productSubscription = this.productsService.getProducts()
        .subscribe(products => {
          this.productsService.products = products
        })
    }
  }
  deleteProduct(id: string) {
    console.log('deleteProduct-list')
    this.productsService.deleteProduct(id)
  }
  saveProduct(product: IProduct) {
    this.productsService.saveProduct(product)
  }

}
