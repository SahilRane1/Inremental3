import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url="https://8080-bdbdeccefddbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";

  constructor(private httpclient:HttpClient) { }
  getPlayers():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/ShowPlayers')
  }
  getTeams():Observable<Team[]>{
    return this.httpclient.get<any[]>(this.url+'/ShowTeams')
  }
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
 
  createTeam(newTeam:Team):Observable<Team>
  {
    return this.httpclient.post<Team>(this.url + '/AddTeams',newTeam,this.httpOptions);
  }

}
