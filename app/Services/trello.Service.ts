import { Injectable } from '@angular/core';
import * as TrelloApiModels from '../Models/TrelloAPIModels';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrelloAPI {
  private applicationKey: string = "aeb9fdc2672e33ac666105e8048246de";
  private authToken: string = "11926bdc8da2b0e56b18c80844f8a7f819b8527269a183600ab41cc255cdd4da";
  private apiUrl = "https://api.trello.com/1/"
  constructor(private http: Http) {
  }
  getUserBoards() {
    var url: string = this.apiUrl + "members/me?fields=username&boards=all&board_fields=name&key=" + this.applicationKey + "&token=" + this.authToken;
    let boards$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapBoards);
    return boards$;
  }
  private mapBoards(response: Response): TrelloApiModels.Board[] {
    var boards: TrelloApiModels.Board[] = response.json().boards;
    return boards;
  }
  getIFLabelsStats(boardId: string) {
    var url = this.apiUrl +"boards/"+ boardId +"/labels?key="+ this.applicationKey + "&token=" + this.authToken;;
    let boards$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapIFLabels);
    return boards$;
  }
  private mapIFLabels(response: Response): TrelloApiModels.LabelModel[] {
    var boards: TrelloApiModels.LabelModel[] = response.json();
    var ifBoards = boards.filter((label) => {
      return label["name"].startsWith('IF') || label["name"].startsWith('I.F.');
    }).map((label) => {
      return new TrelloApiModels.LabelModel(label["name"], label["uses"], label["color"]);
    });
    return ifBoards;
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  private clone(object: any) {
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}