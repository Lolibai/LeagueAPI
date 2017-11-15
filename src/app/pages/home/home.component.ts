import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  summoner: string = 'Lolibai';
  server: string = 'euw1';
  servers = [
    { value: 'br1', viewValue: 'BR' },
    { value: 'eun1', viewValue: 'EUNE' },
    { value: 'euw1', viewValue: 'EUW' },
    { value: 'jp1', viewValue: 'JP' },
    { value: 'kr', viewValue: 'KR' },
    { value: 'la1', viewValue: 'LAN' },
    { value: 'la2', viewValue: 'LAS' },
    { value: 'na1', viewValue: 'NA' },
    { value: 'oc1', viewValue: 'OCE' },
    { value: 'tr1', viewValue: 'TR' },
    { value: 'ru', viewValue: 'RU' },
    { value: 'pbe1', viewValue: 'PBE' }
  ];

  constructor(private apiService: HttpService) { }

  ngOnInit() {
  }

  getInfo() {
    this.apiService.server = this.server;
    this.apiService.getData(this.summoner, this.server)
      .subscribe(res => {
        this.apiService.user = res;
        this.apiService
          .getMatches(this.server, res.accountId)
            .subscribe(res => {
              console.log(res)
              this.apiService.matches = res.matches;
            });
      });
      this.getChamps(this.server);
  }
  getChamps(server) {
    this.apiService.getChamps(this.apiService.server)
      .subscribe(res => {
        return this.apiService.champs = res.champs 
      });
  }
  isEmpty(): boolean {
    return (this.server || this.summoner) == '' ? true : false;
  }
}
