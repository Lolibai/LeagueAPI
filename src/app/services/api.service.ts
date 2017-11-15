import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  private host = 'http://localhost:5000/api/League/';
  user;
  server: string;
  champs: any[] = [];
  matches: any[] = [];
  constructor(private http: Http) { }

  getData(user, server) {
    return this.http.get(`${this.host}summoner?server=${server}&name=${user}`)
      .map(res => res.json());
  }

  getMatches(server, accountId) {
    return this.http.get(`${this.host}matches?server=${server}&accountId=${accountId}`)
      .map(res => res.json());
  }

  getChamps(server: string) {
    return this.http.get(`${this.host}champs?server=${server}`)
      .map(res => res.json());
  }
}