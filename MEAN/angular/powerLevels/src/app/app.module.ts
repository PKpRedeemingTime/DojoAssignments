import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { Body1Component } from './body/body1/body1.component';
import { Body2Component } from './body/body2/body2.component';
import { HumanComponent } from './body/body1/human/human.component';
import { SaiyanComponent } from './body/body1/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './body/body1/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './body/body2/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './body/body2/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './body/body2/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    Body1Component,
    Body2Component,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
