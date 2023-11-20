import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { Team } from '../model/team';
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
}
