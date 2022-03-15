import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductaddComponent } from './Components/Product/productadd/productadd.component';
import { ProductdisplayComponent } from './Components/Product/productdisplay/productdisplay.component';
import { CategoryaddComponent } from './Components/Category/categoryadd/categoryadd.component';
import { CategorydisplayComponent } from './Components/Category/categorydisplay/categorydisplay.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { SigninComponent } from './Components/Pages/signin/signin.component';
import { AdmindashboardComponent } from './Components/Pages/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './Components/Pages/userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductaddComponent,
    ProductdisplayComponent,
    CategoryaddComponent,
    CategorydisplayComponent,
    SignupComponent,
    SigninComponent,
    AdmindashboardComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
