import {Component, Input} from '@angular/core';

@Component({
  selector: 'fdj-sports-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() player;
}
