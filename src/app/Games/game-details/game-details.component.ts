import { Component, OnInit, Input } from '@angular/core';
import { Games } from 'src/app/games';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  @Input() game? : Games;

  constructor() { }

  ngOnInit(): void {
  }

}
