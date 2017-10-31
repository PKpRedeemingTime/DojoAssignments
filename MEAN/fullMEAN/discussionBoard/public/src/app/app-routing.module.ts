import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "app/index/index.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { TopicComponent } from "app/topic/topic.component";
import { UserComponent } from "app/user/user.component";

const routes: Routes = [
  { path: '', pathMatch:'full', component:IndexComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'topic/:id', component:TopicComponent },
  { path: 'user/:id', component:UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
