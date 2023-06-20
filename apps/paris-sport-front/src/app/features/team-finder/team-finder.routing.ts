import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamFinderComponent} from "./containers/team-finder/team-finder.component";
import {TeamDetailComponent} from "./containers/team-detail/team-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'team-finder',
    pathMatch: 'full'
  },
  {
    path: 'team-finder',
    component: TeamFinderComponent
  },
  {
    path: 'team-finder/:id',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamFinderRouting { }
