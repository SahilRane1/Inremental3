import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url  = 'https://8080-bdbdeccefddbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin';
 
  constructor(private httpclient : HttpClient) { }  
  login(username : string, password:string) : Observable<{role : string}>{
    return of ({role : 'ADMIN'});
  }
 
}