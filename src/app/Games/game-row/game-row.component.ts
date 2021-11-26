import { Component, Input, OnInit } from '@angular/core';
import { Games } from 'src/app/games';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {

  @Input() game?: Games;

  constructor() { }

  ngOnInit(): void {
  }

}
