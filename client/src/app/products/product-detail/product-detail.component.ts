import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types/i-product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productsService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.product = response;
    })
  }

}
