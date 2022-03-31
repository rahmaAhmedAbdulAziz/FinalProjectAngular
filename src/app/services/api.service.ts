import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    // return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
    //   return res;


     return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AdTgIpm8pXX1GSAJJCAGKQmhItwkAMfk").pipe(map((res:any)=>{
      return res.results.books
    
    }))
  }
}
