import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import {AngularFireAuth} from 'angularfire2/auth'
// import as firebase from 'firebase'
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // user : firebase
  // user : string
  @ViewChild('loginBtn') loginButton!: ElementRef;
  @ViewChild('logoutBtn') logoutButton!: ElementRef;
  @ViewChild('drop') droped!: ElementRef;
  @ViewChild('signup') signUp!: ElementRef;

  constructor(private api: ApiService) { }
token:any
  username: any
  ngOnInit(): void {
    this.token = localStorage.getItem("token") || "";
  this.username=  this.token.username
    console.log(this.username)
  }

  ngAfterViewInit() {
    if (this.token.username === "") {
      this.logoutButton.nativeElement.style.display = "none";
      this.droped.nativeElement.style.display = "none";

    }
     else {
      this.loginButton.nativeElement.style.display = "none";
      this.signUp.nativeElement.style.display = "none";

    }
  }

  logout() {
    localStorage.removeItem('username');
  }
}