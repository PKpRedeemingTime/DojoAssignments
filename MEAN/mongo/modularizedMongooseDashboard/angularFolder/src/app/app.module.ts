import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanthersListComponent } from './panthers-list/panthers-list.component';
import { PantherService } from "app/panther.service";

@NgModule({
  declarations: [
    AppComponent,
    PanthersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PantherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
