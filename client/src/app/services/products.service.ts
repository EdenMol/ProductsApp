import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../types/i-product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    baseUrl = environment.BASE_URL;
    products: IProduct[];
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private childClickedEvent = new BehaviorSubject<IProduct>(null);
    private childClickedEventDelete = new BehaviorSubject<string>('');

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<IProduct[]>(this.baseUrl + 'products')
    }
    getProduct(id: string) {
        return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
    }
    deleteProduct(id: string) {
        this.childClickedEventDelete.next(id);
        if (!id) return;
        this.products = this.products.filter(item => item.id !== id);
        this.http.delete<IProduct>
            (`${this.baseUrl}products/${id}`, this.httpOptions)
            .subscribe();
    }
    saveProduct(product: IProduct) {
        this.childClickedEvent.next(product);
        const indexOfProd = this.products.findIndex(item => item.id === product.id);
        this.products.splice(indexOfProd, 1, product);
        this.http.put<IProduct>
            (`${this.baseUrl}products`, { ...product }, this.httpOptions)
            .subscribe(
        );
    }
}
