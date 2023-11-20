import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPlayer } from '../model/iplayer';

@Injectable({
  providedIn: 'root'
})
export class IPLService {
  private url="https://8080-bdbdeccefddbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";

  constructor(private httpclient:HttpClient) { }
  getAllPlayers():Observable<IPlayer[]>{
    return this.httpclient.get<IPlayer[]>(this.url+'/ShowPlayers')
  }

}
