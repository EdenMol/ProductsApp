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
}
