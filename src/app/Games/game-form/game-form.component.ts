import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Games } from 'src/app/games';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  
  
  @Input() game?: Games;
  @Output() gameFormClose = new EventEmitter<Games>();
  @Output() newGameEvent = new EventEmitter<Games>();
  message: string = "";
  gameForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.gameForm = new FormGroup({
      name: new FormControl(this.game?.name, [Validators.required, Validators.minLength(3)]),
      release: new FormControl(this.game?.release, [Validators.required, Validators.min(1900), Validators.max((new Date().getFullYear()))]),
      developers: new FormControl(this.game?.developers, [Validators.required, Validators.minLength(3)]),
      mainGenre: new FormControl(this.game?.mainGenre, [Validators.minLength(3)])
    })
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.gameForm?.value);
    this.gameFormClose.emit(this.gameForm?.value)
  }

  get name() {
    return this.gameForm?.get('name');
  }
  get release() {
    return this.gameForm?.get('release');
  }
  get developers(){
    return this.gameForm?.get('developers')
  }
  get mainGenre(){
    return this.gameForm?.get('mainGenre')
  }

  closeForm() {
    this.gameFormClose.emit(undefined)

  }
}
