import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
playerdata:Player[]=[]
export class ListComponent implements OnInit {

  constructor(private as:AdminService ) {
    this.as.getPlayers().subscribe(data=>{this.playerdata.push(...data)})
   }
  //  constructor(private ad:AdminService) {
  //   this.ad.getPlayers().subscribe(data=>{this.players.push(...data)});
  //   console.log(this.players);
  // }

  ngOnInit(): void {
  }

}
