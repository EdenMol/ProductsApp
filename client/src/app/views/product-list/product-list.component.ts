import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/types/i-product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsUrl = environment.USER_SERVICE_BASE_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  productSubscription: any
  get products(): any {
    return this.products || []
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.http.get("https://localhost:5001/api/products").subscribe(response => {
      this.productSubscription = response;
    }, error => {
      console.log(error);
    })
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe()
    }
  }

  deleteProduct(id: string) {
    console.log("id=", id)
    if (!id) return;

    // this.http.delete<IProduct>
    //   (`${this.productsUrl}/delete-product/${id}`)
    //   .subscribe(
    //     (deletedProduct) => {
    //       this.products = this.products.filter(item => item.id !== deletedProduct.id);
    //     });
  }
  saveProduct(product: IProduct) {
    const indexOfProd = this.products.findIndex(item => item.id === product.id);
    this.products.splice(indexOfProd, 1, product);

    // this.http.put<IProduct>
    //   (`${this.productsUrl}/update-product`, { product }, this.httpOptions)
    //   .subscribe()
    //   ;
  }
}
