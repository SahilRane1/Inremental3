import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  playerdata:Player[]=[]

  constructor(private as:AdminService ) {
    this.as.getPlayers().subscribe(data=>{this.playerdata.push(...data)})
   }


  ngOnInit(): void {
  }

}
