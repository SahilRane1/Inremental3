import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { ListComponent } from './list/list.component';
import { ListTeamComponent } from './list-team/list-team.component';

const routes: Routes = [
  // {path:'Showplayers',component:PlayerComponent}
  {path:'ShowPlayeres',component:ListComponent},
  {path:'showTeams',component:ListTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
