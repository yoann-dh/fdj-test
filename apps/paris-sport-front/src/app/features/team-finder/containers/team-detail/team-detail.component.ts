import {Component, OnChanges, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {TeamFinderService} from "../../services/team-finder.service";
import {PlayerModel} from "../../models/player.model";

@Component({
  selector: 'fdj-sports-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit, OnChanges {
  id: string;
  title: string;
  players: PlayerModel[];

  constructor(private location: LocationStrategy, private route: ActivatedRoute, private teamFinderService: TeamFinderService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.teamFinderService.getTeamById(this.id).subscribe((res:any) => {
      if (res) {
        this.title = res.name;
        if (res.players) {
          this.teamFinderService.getPlayers(res.players).subscribe((res:any) => this.players = res)
        }
      }
    })
  }

  ngOnChanges() {

  }

  personnes = [
    {
      nom: 'Doe',
      prenom: 'John',
      pays: 'États-Unis',
      dateNaissance: '01/01/1990',
      prix: '$100',
      image: 'https://example.com/john-doe.jpg'
    },
    {
      nom: 'Smith',
      prenom: 'Jane',
      pays: 'Canada',
      dateNaissance: '05/12/1985',
      prix: '$80',
      image: 'https://example.com/jane-smith.jpg'
    },
    // Ajoutez plus d'objets personne ici...
  ];

  goBack(): void {
    this.location.back();
  }
}
