import {Component, OnInit} from '@angular/core';
import {TeamFinderService} from "../../services/team-finder.service";
import {TeamModel} from "../../models/team.model";

@Component({
  selector: 'fdj-sports-team-finder',
  templateUrl: './team-finder.component.html',
  styleUrls: ['./team-finder.component.scss']
})
export class TeamFinderComponent implements OnInit {
  constructor(private teamFinderService: TeamFinderService) {}
  leagues$: any;
  teams: TeamModel[];

  ngOnInit() {
    this.leagues$ = this.teamFinderService.getLeagues();
  }

  onSelectedLeague(teamsIds: string[]) {
    this.teamFinderService.getTeams(teamsIds).subscribe((res: TeamModel[]) => {
      this.teams = res;
    })
  }
}
