import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  books: any
  categories: any;
  totalItemNumber: number = 0;
  constructor(private api: ApiService, private cartApi: CartapiService) { }

  ngOnInit(): void {
    console.log("categories onInit");
    this.api.categories().subscribe((res: any) => {
      // console.log(res)
      // console.log(res.book)
      // console.log(category)
      this.categories = res;
      console.log(this.categories)

      // this.productList.forEach((a:any) => {
      //   Object.assign(a,{quantity:1, total:a.price})
      // });
      this.cartApi.getProductData().subscribe(res => {
        this.totalItemNumber = res.length;
      })
    })
  }
  addtoCart(books: any) {
    this.cartApi.addToCart(books);

  }

}

