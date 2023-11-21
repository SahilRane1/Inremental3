import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  playerdata:Player;
  constructor(private as:AdminService,private ar:ActivatedRoute,private route:Router) { }
  SaveData(player:Player):void{
    this.playerdata=player;
    this.as.addPlayers(this.playerdata).subscribe(()=>{
      alert("Added Data Successfully")
      this.route.navigate(['/ShowPlayeres'])
    })
  }
  ngOnInit(): void {
  }

}
