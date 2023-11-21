import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/models/team.model';
import { Player } from 'src/models/player.model';
 
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private url="https://8080-beaddfcabfedbecfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";
  private url2="https://8080-bdbdeccefddbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";
 
  constructor(private httpclient:HttpClient) { }
 
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url2 + '/ShowPlayers');
   
  }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url2 + '/ShowTeams');
  }
  httpOptions={headers : new HttpHeaders({'Content-type':'application/json'})};
  addPlayers(playerdata:Player):Observable<Player>
  {
    return this.httpclient.post<Player>(this.url2+'/AddPlayer',playerdata,this.httpOptions);
  }
  addTeam(teamdata:Team):Observable<Team>{
    return this.httpclient.post<Team>(this.url2+'/AddTeam',teamdata,this.httpOptions);
  }
  editTeam(id:number,teamdata:Team):Observable<Team>{
    return this.httpclient.put<Team>(this.url2+'/EditTeam/'+id,teamdata);
  }

 
  // httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
 
  // createTeam(newTeam:Team):Observable<Team>
  // {
  //   return this.httpclient.post<Team>(this.url + '/AddTeam',newTeam,this.httpOptions);
  // }
}