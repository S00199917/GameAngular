import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './Games/game-details/game-details.component';
import { GameFormComponent } from './Games/game-form/game-form.component';
import { GameListComponent } from './Games/game-list/game-list.component';
import { GameRowComponent } from './Games/game-row/game-row.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { JwtInterceptor } from './helper/jwtinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameFormComponent,
    GameListComponent,
    GameRowComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
