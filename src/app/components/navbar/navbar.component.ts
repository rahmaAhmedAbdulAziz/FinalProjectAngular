import { Component, OnInit } from '@angular/core';
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
  constructor(private api: ApiService) { }
username:any
  ngOnInit(): void {
this.username =  localStorage.getItem("username")
console.log(this.username)
}
}