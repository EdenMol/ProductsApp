import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  value = ""
  isEditing = true
  // @Output() edited = new EventEmitter<IProduct>()
  // @Output() deleted = new EventEmitter<string>()

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productsService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.product = response;
    })
  }

  // update(id: string) {
  //   console.log('update-detail', id)
  //   this.isEditing = !this.isEditing
  //   //this.productsService.updateOrCreateProduct(id)

  // }
  // deleteProduct(id: string) {
  //   console.log('delete-detail', id)
  //   // this.productsService.deleteProduct(id)
  //   // this.deleted.emit(id)
  // }

}
