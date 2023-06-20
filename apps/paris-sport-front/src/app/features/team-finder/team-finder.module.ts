import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamFinderRouting } from './team-finder.routing';
import { TeamFinderComponent } from './containers/team-finder/team-finder.component';
import { TeamDetailComponent } from './containers/team-detail/team-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PlayerCardComponent } from './components/player-card/player-card.component';


@NgModule({
  declarations: [
    TeamFinderComponent,
    TeamDetailComponent,
    SearchFormComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TeamFinderRouting
  ]
})
export class TeamFinderModule { }
