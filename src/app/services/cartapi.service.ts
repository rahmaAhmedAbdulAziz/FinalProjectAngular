import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const code ='http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);
  cartproduct ={
    id: Number,
    title: String,
    author: String,
    image: String,
    price: Number,
    qty: 1};
    token:any
  constructor(private http:HttpClient) { this.token=localStorage.getItem("token")
}
  // Get Product Data
  getProductData(){
    return this.productList.asObservable();
  }
// Set Product Data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
  // Add to cart details
  addToCart(product:any){
   this.cartproduct.id=product._id
   this.cartproduct.title=product.name
   this.cartproduct.author=product.author
   this.cartproduct.image=product.image
   this.cartproduct.price=product.price
   this.cartproduct.qty=1

    this.cartDataList.push(this.cartproduct);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  //Get Total amount
  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
     grandTotal += a.price;
      console.log(grandTotal)
    })

    return grandTotal
  }
  // Remove Cart data one by one
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList)
  }
   // Remove All Cart data
   removeAllCart(){
    this.cartDataList = []
      this.productList.next(this.cartDataList)
      }

  

cart(cart:any){
  console.log(cart)
return this.http.post(`${code}/auth/cart/add`,cart);
}

RECEIPT(Receipt:any){
let headers= new HttpHeaders();
headers=headers.set("authorization",this.token)

  console.log(headers)
return this.http.get(`${code}/auth/purchaseHistory`,Receipt);

}
Checkout(checkout:any){
  return this.http.post(`${code}/auth/cart/checkout`,checkout);

}

// checkout(payload: object): Observable<ServerResponse<object>> {
//   return this.http.post<ServerResponse<object>>(baseUrl + checkoutEndpoint, payload);
// }
}