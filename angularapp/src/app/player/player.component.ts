import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 players:Player[]
 newPlayer:Player
  // playerdata:any[]=[]
  constructor(private as:AdminService) {
    // this.as.getPlayers().subscribe(data=>{
    //   this.playerdata.push(...data)
    }
   

  ngOnInit(): void {
  }

}

