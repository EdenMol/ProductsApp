import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../types/i-product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: IProduct;
  @Output() deleted = new EventEmitter<string>()
  @Output() edited = new EventEmitter<IProduct>()
  isEditing = false
  inputState = ""
  constructor() { }

  deleteProduct(id: string) {
    this.deleted.emit(id)
  }
  editOrSave() {
    if (this.isEditing) {
      this.save()
    }
    this.isEditing = !this.isEditing
  }
  save() {
    this.edited.emit(<IProduct>{ ...this.product, title: this.inputState })
  }

}
