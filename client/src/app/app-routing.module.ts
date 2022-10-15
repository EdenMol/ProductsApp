import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ProductListComponent } from './views/product-list/product-list.component';

const routes: Routes = [
  {
  path: "", redirectTo: "products-list", pathMatch: 'full'
},
{ path: "create-product", component: CreateProductComponent },
{ path: "products-list", component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
