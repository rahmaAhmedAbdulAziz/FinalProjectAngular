import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @ViewChild('products') products!: ElementRef;
  products:any =[];
  allProducts:any =0;
  cartData:any;
  token:any

  constructor(private cartApi:CartapiService,  
    
    ) { }
  

  ngOnInit(): void {
    this.token = localStorage.getItem("token") || "";
    // this.token = JSON.parse( localStorage.getItem("token") || "");

    this.cartApi.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }
  removeAllProduct(){
    this.cartApi.removeAllCart();
  }

  cart(){
    console.log(this.products)
//     this.products.map((item: any)=>{
// this.cartData
    // })
    this.cartApi.Checkout({ products:this.products.value,totalPrice:this.allProducts.value,userId:this.token.userId}).subscribe((res: any) => {
// products:this.products,totalPrice:this.allProducts,

      console.log(res)
    },
      (err: any) => {
        alert("you should creata account" + err.status)
      }); 
    }
  }


  

