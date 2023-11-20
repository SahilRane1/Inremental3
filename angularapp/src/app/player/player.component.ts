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
    this.as.getPlayers().subscribe(data=>{this.players.push(...data)});
    }
   

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Player } from '../../models/player.model';
// import { AdminService } from '../services/admin.service';
// // import { ActivatedRoute, Router } from '@angular/router';
 
// @Component({
//   selector: 'app-player',
//   templateUrl: './player.component.html',
//   styleUrls: ['./player.component.css']
// })
// export class PlayerComponent implements OnInit {
 
//  players:Player[]
//  newPlayer:Player
//   constructor(private ad:AdminService) {
//      this.ad.getPlayers().subscribe(data=>{this.players.push(...data)});
//    }
 
//   ngOnInit(): void {
//   }
 
// }
