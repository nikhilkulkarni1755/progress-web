import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'createAccount', component:CreateComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
