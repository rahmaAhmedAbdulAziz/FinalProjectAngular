import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const code ='http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
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
    this.cartDataList.push(product);
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
  return this.http.post(`${code}/cart`,cart);
}
}