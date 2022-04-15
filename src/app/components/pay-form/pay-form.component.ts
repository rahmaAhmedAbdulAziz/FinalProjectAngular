import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {

   totalamount:any 
   proudects:any 
   quanyity:any 
   cart:any
  constructor(private services:CartapiService, private _router: Router) {
    this.services.getProductData().subscribe(res =>
this.proudects=res

      )
      this.services.getTotalAmount()
      this.totalamount=this.services.getTotalAmount()
      // .subscribe(res =>
this.quanyity=this.proudects.length
console.log(this.quanyity)



  }

  ngOnInit(): void {}

    submitcart(){
      this.cart = {
        "proudects": this.proudects,
        "total": this.totalamount,
        "quanyity": this.quanyity
      
      }
      console.log(this.cart);
     alert("thank you to use our web")
      this.services.cart(this.cart).subscribe( res => {
          this._router.navigateByUrl("/")
      
      }) }
  
      submitclose(){
        this.cart = {
          "proudects": this.proudects,
          "total": this.totalamount,
          "quanyity": this.quanyity
        }
        console.log(this.cart);
        alert("success")

      }
 
}