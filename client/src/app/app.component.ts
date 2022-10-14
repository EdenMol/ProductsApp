import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "The Product App";
  products: any

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.http.get("https://localhost:5001/api/products").subscribe(response => {
      this.products = response;
    }, error => {
      console.log(error);
    })
  }
}
