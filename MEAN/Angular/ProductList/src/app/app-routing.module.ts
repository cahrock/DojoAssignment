import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './product-list/edit/edit.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'products/new',  component: CreateComponent },
  { path: 'products/edit/:id',  component: EditComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
