// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-navbar',
// //   templateUrl: './navbar.component.html',
// //   styleUrls: ['./navbar.component.css']
// // })
// // export class NavbarComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import {ServService} from '../../services/serv.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'autocomplete';

//   options = ["Sam", "Varun", "Jasmine"];

//   filteredOptions;


//   formGroup : FormGroup;
//   constructor(private service : ServService, private fb : FormBuilder){}

//   ngOnInit(){
//     this.initForm();
//     this.getNames();
//   }

//   initForm(){
//     this.formGroup = this.fb.group({
//       'employee' : ['']
//     })
//     this.formGroup.get('employee').valueChanges.subscribe(response => {
//       console.log('data is ', response);
//       this.filterData(response);
//     })
//   }

//   filterData(enteredData){
//     this.filteredOptions = this.options.filter(item => {
//       return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
//     })
//   }

//   getNames(){
//     this.service.getData().subscribe(response => {
//       this.options = response;
//       this.filteredOptions = response;
//     })
//   }


  
// }