import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/types/i-product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Output() deleted = new EventEmitter<string>()
  @Output() edited = new EventEmitter<IProduct>()

  isEditing = false 

  deleteProduct(id: string) {
    console.log('delete-card', id)
    this.deleted.emit(id)
  }
  editOrSave() {
    if (this.isEditing) {
      this.save()
    }
    this.isEditing = !this.isEditing
  }
  save() {
    console.log('edit-card', this.product.title, this.product.details, this.product.id)
    this.edited.emit(<IProduct>{ ...this.product, title: this.product.title, details: this.product.details })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
