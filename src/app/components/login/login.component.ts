import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private service:ApiService, private _router: Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(){
    const request = {
        "email": this.usernameInput.nativeElement.value,
        "password": this.passwordInput.nativeElement.value
    }
    console.log();
    this.service.login(request).subscribe( (res:any) => {
      
      console.log(res)
      localStorage.setItem("username",res.username)
        this._router.navigateByUrl("/products")
    },
    err=>{
      alert("you should creata account"+err.status)
    });

  }
}




