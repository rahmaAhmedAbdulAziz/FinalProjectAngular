import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/filter';
// import { filter } from 'rxjs/operators';
// import { map, filter, scan } from 'rxjs/operators'
// import { Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  constructor(private api:ApiService,
    private cartApi:CartapiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if (params?.[`searchTerm`])
    //   this.productList =  this.api.getAll().filter(productList => productList.name.toLowerCase().includes(params.searchTerm.toLowerCase()) )



    this.api.getAll().subscribe((res:any) =>{
      console.log(res.books)
      this.productList=res.books;
      
      // this.productList.forEach((a:any) => {
  //       Object.assign(a,{quantity:1, total:a.price})
  //     });
    }
  )
  }
  addtoCart(books:any){
    this.cartApi.addToCart(books);
  }

}
