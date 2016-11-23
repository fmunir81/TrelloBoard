import { Injectable } from '@angular/core';
import { PersonModel } from '../Models/PersonModel';
import { TrelloApiModels } from '../Models/TrelloAPIModels';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const PEOPLE : PersonModel[] = [
      {id: 1, Name: 'Luke', LastName: 'Skywalker'},
      {id: 2, Name: 'Darth',LastName:'Vader'},
      {id: 3, Name: 'Han',LastName: 'Solo'},
    ];
//https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/
@Injectable()
export class TrelloAPI{
  private applicationKey:string = "aeb9fdc2672e33ac666105e8048246de";
  private authToken:string="11926bdc8da2b0e56b18c80844f8a7f819b8527269a183600ab41cc255cdd4da";
  private apiUrl = "https://api.trello.com/1/"
  constructor(private http : Http){
  }
  getUserBoards(){
     var url:string = this.apiUrl + "members/me?fields=username&boards=all&board_fields=name&key="+ this.applicationKey +"&token="+ this.authToken;
     let people$ = this.http
      .get(url, {headers: this.getHeaders()})
      .map(this.mapBoards);
      return people$;
  }
  mapBoards(response:Response): TrelloApiModels.RootObject{
   return  new TrelloApiModels.RootObject(response.json().results);
}
  getAll() : PersonModel[] {
    return PEOPLE.map(p => this.clone(p));
  }
  get(id: number) : PersonModel {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  save(person: PersonModel){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved muahahaha
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}