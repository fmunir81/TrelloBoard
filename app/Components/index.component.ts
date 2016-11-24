import { Component, Directive, OnInit } from '@angular/core';
import  * as ChartModels  from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';
import { Router } from '@angular/router'

@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/Index.html',
   providers: [TrelloAPI]
})
export class IndexComponent {
   boards : TrelloAPIModels.Board[]= [];
   constructor(private _trelloService: TrelloAPI, private router: Router) {
    
  }
  ngOnInit() {
     this._trelloService.getUserBoards()
     .subscribe(p => this.boards = p)
  }
    selectedBoard:string = null;

  onBoardSelected (selectedBoard) {
    console.log(selectedBoard);
    this.selectedBoard = selectedBoard;
    this.router.navigate(['/dashboard', selectedBoard]);
  }
}
