import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { RegistrationComponent } from "app/registration/registration.component";
import { SuccessComponent } from "app/success/success.component";

const routes: Routes = [
    { path: '', pathMatch:'full', component:RegistrationComponent },
    { path: 'login', component:LoginComponent },
    { path: 'success', component:SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
