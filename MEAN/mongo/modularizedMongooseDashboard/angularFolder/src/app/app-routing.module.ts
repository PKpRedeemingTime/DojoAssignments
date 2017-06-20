import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanthersListComponent } from "app/panthers-list/panthers-list.component";

const routes: Routes = [
  {
    path: '', pathMatch:'full', component:PanthersListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
