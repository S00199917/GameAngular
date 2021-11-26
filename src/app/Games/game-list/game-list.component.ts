import { Component, OnInit } from '@angular/core';
import { Games } from '../../games'
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];
  message: string = "";
  showGameForm: boolean = false;

  currentGame?: Games = undefined;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {


    this.gameService.getGames().subscribe({
      next: (value: Games[]) => this.gameList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(game: Games): void {
    this.currentGame = game;
    console.table(this.currentGame)
  }

  isSelected(game: Games): boolean {
    if (!game || !this.currentGame) {
      return false;
    }
    else {

      return game._id === this.currentGame._id;
    }
  }

  openAddGame(): void {
    this.currentGame = undefined;
    this.showGameForm = true;
  }

  openEditGame(): void {
    this.showGameForm = true;
  }

  addNewGame(newGame: Games): void {
    console.log('adding new game ' + JSON.stringify(newGame));
    this.gameService.addGames({ ...newGame })
      .subscribe({
        next: game => {
          console.log(JSON.stringify(game) + ' has been added');
          this.message = "new game has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

    this.gameService.getGames().subscribe({
      next: (value: Games[]) => this.gameList = value,
      complete: () => console.log('game service finished'),
      error: (mess) => this.message = mess
    })

    this.ngOnInit()
  }

  updateGame(id: string, game: Games): void {
    console.log('updating ' + JSON.stringify(game));
    this.gameService.updateGame(id, game)
      .subscribe({
        next: game => {
          console.log(JSON.stringify(game) + ' has been updated');
          this.message = " game has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.gameService.getGames().subscribe({
      next: (value: Games[]) => this.gameList = value,
      complete: () => console.log('game service finished'),
      error: (mess) => this.message = mess
    })

    this.ngOnInit();
  }


  /* either the form has closed without saving or new book details have been
  entered or a book has been updated */

  gameFormClose(game?: Games): void {
    this.showGameForm = false;
    console.table(game);
    if (game == null) {
      this.message = "form closed without saving";
      this.currentGame = undefined
    }
    else if (this.currentGame == null) {
      this.addNewGame(game);
    }
    else {
      this.updateGame(this.currentGame?._id, game)
    }
  }

// note: Bad UX there is no check that the user wants to delete the book and hasn't just 
// hit the button by mistake

  deleteGame() {
    console.log('deleting a game ');
    if (this.currentGame) {
      this.gameService.deleteGame(this.currentGame._id)
        .subscribe({
          next: game => {
            console.log(JSON.stringify(game) + ' has been added');
            this.message = "game has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

    this.gameService.getGames().subscribe({
      next: (value: Games[]) => this.gameList = value,
      complete: () => console.log('game service finished'),
      error: (mess) => this.message = mess
    })

    this.ngOnInit();
  }


  dismissAlert() {
    this.message = "";
  }
}
