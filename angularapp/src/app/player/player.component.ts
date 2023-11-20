import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerdata:any[]=[]
  constructor(private as:AdminService) {
    this.as.getPlayers().subscribe(data=>{
      this.playerdata.push(...data)
    })
   }

  ngOnInit(): void {
  }

}
