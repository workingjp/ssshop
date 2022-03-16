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
import { MobilesComponent } from './Components/Pages/mobiles/mobiles.component';
import { FashionComponent } from './Components/Pages/fashion/fashion.component';
import { ElectronicsComponent } from './Components/Pages/electronics/electronics.component';
import { AppliancesComponent } from './Components/Pages/appliances/appliances.component';
import { TravelComponent } from './Components/Pages/travel/travel.component';
import { HouseholdComponent } from './Components/Pages/household/household.component';
import { CartComponent } from './cart/cart.component';

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
    UserdashboardComponent,
    MobilesComponent,
    FashionComponent,
    ElectronicsComponent,
    AppliancesComponent,
    TravelComponent,
    HouseholdComponent,
    CartComponent,
    
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
