// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http : HttpClient) { }

  // getData(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(
        // map((response:[]) => response.map(item => item['name']))
//       )
//   }
}