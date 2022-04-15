import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm : FormGroup;  //  {(
  //   nameInput: new FormControl(""),
  //   usernameInput: new FormControl(""),
  //   passwordInput: new FormControl(""),
  //   confirmpasswordInput:new FormControl(""),
  //   emailInput:new FormControl(""),
  //   Birthday: new FormControl(""),
  //   GenderInput:new FormControl(""),
  //   )}


  @ViewChild('nameInput',{ read: ElementRef, static: false }) nameInput!: ElementRef;
 @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('confirmpasswordInput') confirmpasswordInput!: ElementRef;

  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('Birthday') BirthdayInput!: ElementRef;
  @ViewChild('GenderInput') GenderInput!: ElementRef;
  @ViewChild('roleInput') roleInput!: ElementRef;





  constructor(private fb : FormBuilder, private service:ApiService, private _router: Router) {
// this.registerForm= new FormGroup({
//   EmailAddress : new FormControl('' , Validators.required),
//   Name : new FormControl('' , Validators.required),
//   username : new FormControl('' , Validators.required),
//   password : new FormControl('' , [Validators.required,Validators.minLength(8)])
// })
this.signUpForm = this.fb.group({
  inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],

  inputUsername: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],

  inputSginUpEmail: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],

  inputBirthday:['',[Validators.required]],

  inputGender:['',[Validators.required]],

  inputPass: ['',[Validators.required,Validators.minLength(8)]],
  // ,Validators.pattern("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}")

  inputConfiemPass: ['',[Validators.required]],

  },
  {
    validator: this.ConfirmedValidator('inputPass', 'inputConfiemPass')
  }
  )
// this.signUpForm = this.fb.group({
//   Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
//   Name:['',Validators.required],
//   userName:['',
//   [
//     Validators.required,
//     Validators.pattern("^[a-z]*$")]],
//   password:['',[
//     Validators.required,
//     Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$")]],
//   confirmPassword:['',Validators.required],
//   Birthday:["",Validators.required],
// },{validator: this.checkIfMatchingPasswords('password', 'confirmPassword')})

}
checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
return (group: FormGroup) => {
  let passwordInput = group.controls[passwordKey],
      passwordConfirmationInput = group.controls[passwordConfirmationKey];
  if (passwordInput.value !== passwordConfirmationInput.value) {
    return passwordConfirmationInput.setErrors({notEquivalent: true})
  }
  else {
      return passwordConfirmationInput.setErrors(null);
  }
}
}
// get formControls() {
// return this.signUpForm.controls;
// }
ngOnInit(): void {
}
get formControls(){
  return this.signUpForm.controls;
}
submitSignUpForm(){
  console.log(this.signUpForm.value)
  const name=this.signUpForm.value.inputName;
  const username=this.signUpForm.value.inputUsername;
  const email=this.signUpForm.value.inputSginUpEmail;
  const password=this.signUpForm.value.inputPass;
  const Birthday=this.signUpForm.value.inputBirthday;
  const Gender=this.signUpForm.value.inputGender;
  // const username=this.signUpForm.value.inputName;

  console.log(username,email,password,name);
 this.service.signup({username,email,password,name,Birthday,Gender}).subscribe(
   (res)=> this._router.navigateByUrl("/products")
   ,
  (err)=>  alert("404"+err.status)
  )
}

ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
// submitSignUpForm() {
//   const registerObject = {
//     "name": this.nameInput.nativeElement.value,
//     "username":this.usernameInput.nativeElement.value,
//     "email":this.emailInput.nativeElement.value,
//     "password":this.passwordInput.nativeElement.value,
//     "confirmpasswordInput":this.confirmpasswordInput.nativeElement.value,
//     "Birthday":this.BirthdayInput.nativeElement.value,
//     "Gender":this.GenderInput.nativeElement.value,
//     "role":this.roleInput.nativeElement.value,
    
//   }
//   console.warn(this.signUpForm);

  // console.log(this.BirthdayInput.nativeElement.value);
//   this.service.signup(registerObject).subscribe( res => {
//      this._router.navigateByUrl("/")
//     //  console.log(res)

//   },
//   err=>{
//     alert("you should creata account"+err.status)
//   });

// }
}