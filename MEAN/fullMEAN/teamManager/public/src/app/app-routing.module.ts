import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from "app/player-list/player-list.component";
import { PlayerCreateComponent } from "app/player-create/player-create.component";

const routes: Routes = [
  { path: '', 
  pathMatch:'full', 
  redirectTo: 'players/list' },
  { path: 'players/list',
    component:PlayerListComponent,
  },
  { path: "players/addplayer",
    component:PlayerCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
