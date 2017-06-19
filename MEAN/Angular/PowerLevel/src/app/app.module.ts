import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm}  from "@angular/forms";

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyanOneComponent } from './super-saiyan-one/super-saiyan-one.component';
import { SuperSaiyanTwoComponent } from './super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './super-saiyan-four/super-saiyan-four.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanOneComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
