import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/api.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor(private apiService: HttpService) {

  }

  ngOnInit() {
  }

  getImage(id): string {
    let champ: string = _.find(this.apiService.champs, r => {
      if (r.id == id) { return r.name; }
    })
    return champ;
  }
}
