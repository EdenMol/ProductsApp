import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../types/i-product';


@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    baseUrl = environment.BASE_URL;
    products: IProduct[];
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" , "Access-Control-Allow-Methods": "GET, DELETE, POST, PUT", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With" })
    };

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
        this.products = this.products.filter(item => item.id !== id);

        this.http.delete<IProduct>
            (`${this.baseUrl}delete/${id}`, this.httpOptions)
            .subscribe(
                (deletedProduct) => {
                    this.products = this.products.filter(item => item.id !== deletedProduct.id);
                });
    }
    saveProduct(product: IProduct) {
        const indexOfProd = this.products.findIndex(item => item.id === product.id);
        this.products.splice(indexOfProd, 1, product);

        this.http.put<IProduct>
            (`${this.baseUrl}products`, { product }, this.httpOptions)
            .subscribe();
    }
}
