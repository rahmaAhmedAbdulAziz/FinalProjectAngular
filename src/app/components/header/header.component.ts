import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber: number = 0;
  lang: string = "en";
  constructor(private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }

  changeLang() {
    console.log(localStorage.getItem('lang'));
    if (this.lang == 'en')
      localStorage.setItem('lang', 'ar');
    else
      localStorage.setItem('lang', 'en');
    window.location.reload();  
  }
}
