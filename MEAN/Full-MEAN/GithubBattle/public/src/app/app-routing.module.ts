import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowComponent } from './show/show.component';
import {BattleComponent} from './battle/battle.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: FormsComponent},
  { path: 'battle', component: BattleComponent },
  { path: 'rankings', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
