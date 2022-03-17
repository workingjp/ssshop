import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AppliancesComponent } from './Components/Pages/appliances/appliances.component';
import { ElectronicsComponent } from './Components/Pages/electronics/electronics.component';
import { FashionComponent } from './Components/Pages/fashion/fashion.component';
import { ForgotpassComponent } from './Components/Pages/forgotpass/forgotpass.component';
import { HouseholdComponent } from './Components/Pages/household/household.component';
import { MobilesComponent } from './Components/Pages/mobiles/mobiles.component';
import { SigninComponent } from './Components/Pages/signin/signin.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { TravelComponent } from './Components/Pages/travel/travel.component';

const routes: Routes = [
  
{path:'' ,component:HomeComponent},
{path:'signin' , component:SigninComponent},
{path:'signup' , component:SignupComponent},
{path:'forgotpass' , component:ForgotpassComponent},

{path:'household' , component:HouseholdComponent},
{path:'travel' , component:TravelComponent},
{path:'mobiles' , component:MobilesComponent},
{path:'eletronics' , component:ElectronicsComponent},
{path:'fashion' , component:FashionComponent},
{path:'appliances' , component:AppliancesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }