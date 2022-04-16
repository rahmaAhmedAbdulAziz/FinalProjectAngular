import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const code ='http://localhost:5000'



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // export class TutorialService {

  constructor(private http:HttpClient) { }
getAll(){
  return this.http.get(`${code}/books`);
}
categories(){
  return this.http.get(`${code}/category`);
}
  // getProduct(){
    login(form:any){
      console.log(form);
      return this.http.post(`${code}/auth/login`,form);
    }

    signup(form:any){
      console.log(form)
      return this.http.post(`${code}/auth/register`,form);
      
    }
    user(form:any){
      console.log(form);
      return this.http.post(`${code}/auth/login`,form);
    }
  }
    // return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
    //   return res;
    // return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AdTgIpm8pXX1GSAJJCAGKQmhItwkAMfk").pipe(map((res:any)=>{
    //   return res.results.books
    // var body = new Body("books","Bookstore","Cluster0");
    // var url = "https://data.mongodb-api.com/app/data-zngic/endpoint/data/beta/action/find";
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Request-Headers': '*',
    //     'api-key': 'lXCaBjAZAGCzCaiG1P4K62sg1R0H7UqVJB3N5ecHsbOAJ0RVvyRNQ1jUhWXxvQ6S'
    //   })
    // };
    // return this.http.post<Body>(url, body, httpOptions).pipe(map((res: any) => {
    //   console.log(res);
    //   return res.documents;
  //    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AdTgIpm8pXX1GSAJJCAGKQmhItwkAMfk").pipe(map((res:any)=>{
  //     return res.results.books
    
  //   }))
  // }
//   return this.http.get("http://localhost:5000/books").pipe(map((res:any)=>{
//          return res.books
      
//        }))
//      }
// }
// class Body {
//   collection: string;
//   database: string;
//   dataSource:string;

//   constructor(collection: string, database: string, dataSource: string ){
//     this.collection = collection;
//     this.database = database;
//     this.dataSource = dataSource;
//   }
// }