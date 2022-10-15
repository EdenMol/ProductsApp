import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../types/i-product';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    baseUrl = environment.BASE_URL;
    products: IProduct[];

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<IProduct[]>(this.baseUrl + 'products')
    }
    getProduct(id: string) {
        return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
    }
    deleteProduct(id: string) {
        if (!id) return;
        console.log('delete-service', id)
        this.products = this.products.filter(item => item.id !== id);

        // this.http.delete<IProduct>
        //     (`${this.productsUrl}/delete-product/${id}`)
        //     .subscribe(
        //         (deletedProduct) => {
        //             this.products = this.products.filter(item => item.id !== deletedProduct.id);
        //         });
    }
    saveProduct(product: IProduct) {
        console.log('saveProduct-service', product.id)
        const indexOfProd = this.products.findIndex(item => item.id === product.id);
        this.products.splice(indexOfProd, 1, product);

        // this.http.put<IProduct>
        //     (`${this.productsUrl}/update-product`, { product }, this.httpOptions)
        //     .subscribe()
        //     ;
    }
}
