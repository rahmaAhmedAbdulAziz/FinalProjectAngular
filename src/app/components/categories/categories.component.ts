import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cats: any;
  constructor(private api: ApiService, private cartApi: CartapiService) { }

  ngOnInit(): void {
    console.log("categories onInit");
    this.api.categories().subscribe((res: any) => {
      console.log(res)
      this.cats = res;
      // this.productList.forEach((a:any) => {
      //   Object.assign(a,{quantity:1, total:a.price})
      // });
    })
  }
  addtoCart(books: any) {
    this.cartApi.addToCart(books);
  }

}

