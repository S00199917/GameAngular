import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './Games/game-details/game-details.component';
import { GameFormComponent } from './Games/game-form/game-form.component';
import { GameListComponent } from './Games/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameFormComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
