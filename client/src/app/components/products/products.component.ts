import { Component, EventEmitter, Input } from '@angular/core';
import { IProduct } from 'src/app/types/i-product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsUrl = environment.USER_SERVICE_BASE_URL;
  products: IProduct[];
  constructor(private http: HttpClient) {
    this.getProducts()
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.http.get<IProduct[]>(this.productsUrl + '/products').subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error);
    })
  }

}
