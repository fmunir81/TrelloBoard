import { Injectable } from '@angular/core';
import * as TrelloApiModels from '../Models/TrelloAPIModels';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class TrelloAPI {
  private applicationKey: string = "aeb9fdc2672e33ac666105e8048246de";
  private authToken: string = localStorage.getItem("trello_token"); //"11926bdc8da2b0e56b18c80844f8a7f819b8527269a183600ab41cc255cdd4da";
  private apiUrl = "https://api.trello.com/1/"
  private authStatus: boolean = true;


  constructor(private http: Http) {
  }


  getUserBoards() {
    var url: string = this.apiUrl + "members/me?fields=username&boards=all&board_fields=name&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
    let boards$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapBoards);
    return boards$;
  }

  getRecentActions(boardId: string) {
    var url: string = this.apiUrl +"boards/"+ boardId +"/actions?filter=addAttachmentToCard,addMemberToCard,updateCard:idList&limit=10&key="+ this.applicationKey + "&token=" + localStorage.getItem("trello_token");
    let actions$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapActions);
    return actions$;
  }

  getRecentComments(boardId: string) {
    var url: string = this.apiUrl +"boards/"+ boardId +"/actions?filter=commentCard&limit=10&key="+ this.applicationKey + "&token=" + localStorage.getItem("trello_token");;
    let comments$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapComments);
    return comments$;
  }
 
  getIFLabelsStats(boardId: string) {
    var url = this.apiUrl +"boards/"+ boardId +"/labels?key="+ this.applicationKey + "&token=" + localStorage.getItem("trello_token");
    let ifLabels$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapIFLabels);
    return ifLabels$;
  }

  getListsCardsCount(boardId:string){
    var url:string = this.apiUrl + "boards/"+ boardId +"/lists?cards=all&card_fields=name&fields=name&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
    let listCardCounts$ = this.http
      .get(url, { headers: this.getHeaders() })
      .map(this.mapListCardCounts);
    return listCardCounts$;
  }
  private mapListCardCounts(response : Response):TrelloApiModels.ListCardsCountModel[]{
    var lists: any[] = response.json();
    var listsCardCount:TrelloApiModels.ListCardsCountModel[]  = lists.filter((list)=>{
      return list["cards"].length > 0;
    }).map((list)=>{
      return new TrelloApiModels.ListCardsCountModel(list["name"],list["cards"].length);
    });
    return listsCardCount;
  }
  private mapIFLabels(response: Response): TrelloApiModels.LabelModel[] {
    var boards: TrelloApiModels.LabelModel[] = response.json();
    var ifBoards = boards.filter((label) => {
      return label["name"].startsWith('IF') || label["name"].startsWith('I.F.');
    }).map((label) => {
      var color =  label["color"]=="sky"?"#C0C0C0":label["color"];
      return new TrelloApiModels.LabelModel(label["name"], label["uses"], color);
    });
    return ifBoards;
  }
   private mapBoards(response: Response): TrelloApiModels.Board[] {
    var boards: TrelloApiModels.Board[] = response.json().boards;
    return boards;
  }

  private mapActions(response: Response): TrelloApiModels.Action[] {
    var actions: TrelloApiModels.Action[] = response.json();
    return actions;
  }

  private mapComments(response: Response): TrelloApiModels.Comments[] {
    var comments: TrelloApiModels.Comments[] = response.json();
    return comments;
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