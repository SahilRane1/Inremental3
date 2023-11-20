import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { AdminService } from '../services/admin.service';
 
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 
 players:Player[]=[]
//  newPlayer:Player
  constructor(private ad:AdminService) {
     this.ad.getPlayers().subscribe(data=>{this.players.push(...data)});
     console.log(this.players);
   }
  ngOnInit(): void {
  }
}
