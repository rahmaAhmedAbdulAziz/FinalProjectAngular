import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
import { ActivatedRoute ,Router} from '@angular/router';
// import 'rxjs/add/operator/filter';
import { map, filter, scan } from 'rxjs/operators'
// import {
//   Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent
// } from 'rxjs';

interface Product {
  name: string;
  image: string;
  description: string;
  price: any;
  available: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productList: any;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private api: ApiService, private router: Router,
    private cartApi: CartapiService, private route: ActivatedRoute) { }
    username:any
iteam:any
totalItemNumber: number = 0;
token:any
  ngOnInit(): void {
    this.token = localStorage.getItem("token") || "";
    console.log(this.token.username)
    this.route.params.subscribe(params => {

      if (params?.[`searchTerm`])
        this.api.getAll()
          .pipe(map(function (result: any, index: number) {
            return result['books'].filter((product: any) =>
              product['name'].toLowerCase().includes(params['searchTerm'].toLowerCase()))
          }))
          .subscribe((res: any) => this.productList = res)
      else
      this.api.getAll().subscribe((res: any) => {
        console.log(res.books)
        this.productList = res.books;
  
        // this.productList.forEach((a:any) => {
        //       Object.assign(a,{quantity:1, total:a.price})
        //     });
      })
    })
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
  addtoCart(books: any) {
   if (this.username === "") {
alert("you must login in")
  } else {
        this.cartApi.addToCart(books);
      }
    }
  
  searchTerm: string = "";

 
  search(): void {
    this.searchTerm = this.searchInput.nativeElement.value;
    console.log(this.searchTerm);
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }
  // description():void{
  //   this.description=iteam.description;
  //   console.log(this.searchTerm);
  //   this.router.navigateByUrl('/search/' + this.searchTerm);
  // }
}
