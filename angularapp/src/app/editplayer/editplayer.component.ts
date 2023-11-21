import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
  playerdata:Player={id:0,teamid:0,name:'',age:0,category:'',biddingPrice:0}
  id:number;
  constructor(private as:AdminService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    const tid=this.ar.snapshot.paramMap.get('id');
    this.id=Number(tid);
    this.getplayer(this.id);
  }
  getplayer(id:number){
    this.as.getP(id).subscribe((data:Player)=>{
      this.playerdata=data;
    })
  }
  SaveData(playerdata:Player){
    this.as.editPlayer(playerdata).subscribe(()=>{
      alert('Data Edited Successfully')
      this.route.navigate(['/ShowPlayers'])
    })
  }

}
