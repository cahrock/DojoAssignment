import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstAngularComponentComponent } from './first-angular-component/first-angular-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAngularComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
