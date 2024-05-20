import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'createAccount',component:CreateAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'**', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
