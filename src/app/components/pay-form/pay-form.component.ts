import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {
  products:any
  users: any
books: any
  cats: any;
  checkoutdata:any
  token:any
  allProducts:any
  totalprice=0
  constructor(private api: ApiService, private cartApi: CartapiService) { }

  ngOnInit(): void {
    
    this.token = JSON.parse( localStorage.getItem("token") || "");

    console.log("orders onInit");
    // this.cartApi.cartDataList.subscribe((res: any) => {
    //   console.log(res)
    //   this.products = res;
      this.cartApi.getProductData().subscribe(res=>{
       
        this.products = res;
       
        console.log(this.products)
      
        this.allProducts = this.cartApi.getTotalAmount();

        
      })

      this.products.forEach((element:any) => {
        this.totalprice=this.totalprice+element.price
      });

      this.checkout()
    //   this.productList.forEach((a:any) => {
    //     Object.assign(a,{quantity:1, total:a.price})
    //   });
    // })
  }
  addtoCart(books: any) {
    this.cartApi.addToCart(books);
  }
  checkout(){
    this.cartApi.RECEIPT({productsInfo:this.products,totalPrice:this.allProducts,userId:this.token.userId}).subscribe(
      res=>{
        console.log(res)
      })

  }

  addtotalprice(price:number){
    this.totalprice=this.totalprice+price
  }
  // user: { type: OBJECT_ID, ref: 'User' },
  // productsInfo: [],
  // totalPrice: { type: NUMBER, default: 0 },
  // creationDate: { type: DATE, default: Date.now }

}


// export class PayFormComponent implements OnInit {

//    totalamount:any 
//    proudects:any 
//    quanyity:any 
//    cart:any
   
//   constructor(private services:CartapiService, private _router: Router) {
//     this.services.getProductData().subscribe(res =>
// this.proudects=res

//       )
//       this.services.getTotalAmount()
//       this.totalamount=this.services.getTotalAmount()
//       // .subscribe(res =>
// this.quanyity=this.proudects.length
// console.log(this.quanyity)



//   }

//   ngOnInit(): void {}

//     submitcart(){
//       this.cart = {
//         "proudects": this.proudects,
//         "total": this.totalamount,
//         "quanyity": this.quanyity
      
//       }
//       console.log(this.cart);
//      alert("thank you to use our web")
//       this.services.cart(this.cart).subscribe( res => {
//           this._router.navigateByUrl("/")
      
//       }) }
  
//       submitclose(){
//         this.cart = {
//           "proudects": this.proudects,
//           "total": this.totalamount,
//           "quanyity": this.quanyity
//         }
//         console.log(this.cart);
//         alert("success")

//       }
 
// }