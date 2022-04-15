import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  productList:any;
  constructor(private api:ApiService,
    private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(res=>{
      this.productList=res;
      // this.productList.forEach((a:any) => {
      //   Object.assign(a,{quantity:1, total:a.price})
      // });
    })
  }
  addtoCart(books:any){
    this.cartApi.addToCart(books);
  }

}
