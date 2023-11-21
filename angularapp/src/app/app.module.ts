import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ListComponent } from './list/list.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { HomeComponent } from './home/home.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { FormsModule } from '@angular/forms';
import { AddteamComponent } from './addteam/addteam.component';
import { EditteamComponent } from './editteam/editteam.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ListComponent,
    ListTeamComponent,
    HomeComponent,
    AddplayerComponent,
    AddteamComponent,
    EditteamComponent,
    EditplayerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
