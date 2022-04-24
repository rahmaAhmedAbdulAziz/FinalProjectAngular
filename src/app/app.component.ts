import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import {AngularFireAuth} from 'angularfire2/auth';
// import firebase from 'firebase/compat/app';
// import { StreamI18nService } from 'stream-chat-angular';
// constructor(private streamI18nService: StreamI18nService) {  this.streamI18nService.setTranslation();}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecart';
  constructor(private translateService: TranslateService) {
    console.log(localStorage.getItem('lang'));
      this.translateService.setDefaultLang('en');
      this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  // constructor(private afAuth:AngularFireAuth){}
  // ngOnInit(){
  //   this.afAuth.authState.subscribe((user) => console.log(user));

  // }


}
