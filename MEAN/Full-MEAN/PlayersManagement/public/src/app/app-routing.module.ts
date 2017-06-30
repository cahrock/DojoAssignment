import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {PlayercreateComponent} from './playercreate/playercreate.component';
import {PlayerlistComponent} from './playerlist/playerlist.component';
// import {}

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'players'},
  { path: 'players', component: PlayerComponent,
    children: [
        { path: 'list',  component: PlayerlistComponent},
        { path: 'addplayers',component: PlayercreateComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
