import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';
import {FormsModule} from '@angular/forms';
import { UsersService } from "app/users.service";
import { HttpService } from "app/http.service";
import { Player1Component } from './battle/player1/player1.component';
import { Player2Component } from './battle/player2/player2.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ResultsComponent,
    RankingsComponent,
    Player1Component,
    Player2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [UsersService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
