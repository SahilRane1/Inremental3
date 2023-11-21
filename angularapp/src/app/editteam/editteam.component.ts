import { Component, OnInit } from '@angular/core';
import { Team } from 'src/models/team.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.css']
})
export class EditteamComponent implements OnInit {
  teamdata:Team={teamid:0,teamName:''}
  id:number;
  constructor(private as:AdminService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    const tid=this.ar.snapshot.paramMap.get('id');
    this.id=Number(tid);

  }
  GetTeam(id)
{
  
}
}
