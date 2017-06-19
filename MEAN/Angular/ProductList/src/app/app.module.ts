import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './product-list/in-memory-data.service';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService }          from './product-list/product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './product-list/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ProductListComponent,
    HomeComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
