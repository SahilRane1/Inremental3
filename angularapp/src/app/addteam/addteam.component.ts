import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  teamdata:Team={id:0,name:''}
  constructor(private ad:AdminService,private ar:ActivatedRoute,private route:Router) { }
  SaveData(data:Team):void{
    this.teamdata=data;
    this.ad.addTeam(this.teamdata).subscribe(()=>{
      alert("Team Added Successfully")
      this.route.navigate(['/showTeams'])
    })
  }

  ngOnInit(): void {
  }

}
