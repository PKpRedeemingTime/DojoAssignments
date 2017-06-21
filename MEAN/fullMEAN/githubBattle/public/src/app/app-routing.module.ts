import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from "app/battle/battle.component";
import { ResultsComponent } from "app/results/results.component";
import { RankingsComponent } from "app/rankings/rankings.component";

const routes: Routes = [
    { path: '', pathMatch:'full', component:BattleComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'rankings', component: RankingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
