import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamdata:any[]=[]
  constructor(private as:AdminService) {
    this.as.getTeams().subscribe(data=>{
      this.teamdata.push(...data)
    })
   }

  ngOnInit(): void {
  }

}
