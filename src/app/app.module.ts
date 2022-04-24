import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PayFormComponent } from './components/pay-form/pay-form.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './search/search.component';
// import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
// import { RatingModule } from 'ng-starrating';


export function rootLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PayFormComponent,
    AuthorsComponent,
    CategoriesComponent,
    SearchComponent,
    // HomeComponent,
    // SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RatingModule,

    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: rootLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
