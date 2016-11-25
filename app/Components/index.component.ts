import { Component, Directive, OnInit,ViewChild } from '@angular/core';
import  * as ChartModels  from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';
import { Router } from '@angular/router'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/Index.html',
   providers: [TrelloAPI]
})
export class IndexComponent {
  @ViewChild('myModald')
    modal: ModalComponent;
   boards : TrelloAPIModels.Board[]= [];
   constructor(private _trelloService: TrelloAPI, private router: Router) {
    
  }
  ngOnInit() {
     this._trelloService.getUserBoards()
     .subscribe(p => this.boards = p)
  }
    selectedBoard:string = "";

  onBoardSelected (board) {
    debugger;
    console.log(board.id);
    this.selectedBoard = board.id;
    this.router.navigate(['/dashboard', this.selectedBoard,board.name]);
  }
}
