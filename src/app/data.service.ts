import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getAllProducts() {
    return this.http.get("https://springbootsapzg4t4ks63a.hana.ondemand.com/spring-boot-sap/products/");

  }

  addProduct(product: any) {
    return this.http.post("https://springbootsapzg4t4ks63a.hana.ondemand.com/spring-boot-sap/products", product);

  }
}
