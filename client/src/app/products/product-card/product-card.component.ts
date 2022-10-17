import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/types/i-product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  isEditing: boolean = false

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id);
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
