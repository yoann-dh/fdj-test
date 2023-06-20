import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {LeagueModel} from "../models/league.model";

@Injectable({
  providedIn: 'root'
})
export class TeamFinderService {

  constructor(private http: HttpClient) { }

  getLeagues() {
    return this.http.get('/api/leagues')
  }

  getTeams(ids: string[]){
    let params = new HttpParams();
    ids.forEach(id => {
      params = params.append('ids', id);
    });
    return this.http.get('api/teams', { params })
  }

  getTeamById(id: string){
    return this.http.get(`api/teams/${id}`)
  }

  getPlayers(ids: string[]){
    let params = new HttpParams();
    ids.forEach(id => {
      params = params.append('ids', id);
    });
    return this.http.get('api/players', { params })
  }


}
