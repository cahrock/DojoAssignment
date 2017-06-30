import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { RegistrationComponent } from "app/registration/registration.component";
import { HomePageComponent } from "app/home-page/home-page.component";

const routes: Routes = [
  { path: '', pathMatch:"full", redirectTo:'login'},  
  { path: 'login', component:LoginComponent},
  { path: 'registration', component:RegistrationComponent},
  { path: 'home', component:HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
