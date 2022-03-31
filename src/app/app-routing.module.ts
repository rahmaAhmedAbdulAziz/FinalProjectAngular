import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { PayFormComponent } from './components/pay-form/pay-form.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},

 
  {
    path:'Login' , component:LoginComponent
  },
  {
    path:'Register' , component:RegisterComponent
  },
  {
    path:'payForm' , component:PayFormComponent
  },
  {
    path:'authors' , component:AuthorsComponent
  },
  {
    path:'categories' , component:CategoriesComponent
  },
  // {
  //   path:'**' , component:NotFoundPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
