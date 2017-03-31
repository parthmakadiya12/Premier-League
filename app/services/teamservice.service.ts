import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class TeamService {

    constructor(public http:Http) { }

    public getTeamData(title:string): Observable<any>{
        let url='https://en.wikipedia.org/w/api.php?action=parse&page='+title+'&prop=text&section=0&format=json';
            return this.http.get(url).map((response: Response) =>  response.json());                
    }

  public getLeagueData(): Observable<any>{
        let url='https://en.wikipedia.org/w/api.php?action=parse&page=2016%E2%80%9317_Premier_League&prop=text&section=0&format=json';
            return this.http.get(url).map((response: Response) =>  response.json());                
    }
    
}