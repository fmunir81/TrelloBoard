import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import * as ChartModels from "../Models/ChartModels";
import { TrelloAPI } from '../Services/trello.Service';
import * as TrelloAPIModels from '../Models/TrelloAPIModels';
import { Router } from '@angular/router'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

declare var Trello: any;
@Component({
  selector: 'trello-app',
  templateUrl: './app/Views/Index.html',
  providers: [TrelloAPI]
})
export class IndexComponent {
  @ViewChild('myModald')
  modal: ModalComponent;
  boards: TrelloAPIModels.Board[] = [];
  trelloObj: any;
  authStatus: boolean = false;
  constructor(private _trelloService: TrelloAPI, private router: Router) {
    this.trelloObj = Trello;
  }
  authenticateOnTrello() {
    var _this = this;
    this.trelloObj.authorize({
      type: "popup",
      name: "Trello dashboard",
      scope: {
        read: true,
        write: false
      },
      expiration: "never",
      success: function () {
        console.log("Successful authentication");
        _this.authStatus = true;
        _this.getBoards();
      },
      error: function () {
        _this.authStatus = false;
        console.log("Failed authentication");
      }
    });
  }
  ngOnInit() {
    this.authenticateOnTrello();
  }
  getBoards() {
    this._trelloService.getUserBoards()
      .subscribe(p => this.boards = p)
  }
  selectedBoard: string = "";

  onBoardSelected(board) {
    debugger;
    console.log(board.id);
    this.selectedBoard = board.id;
    this.router.navigate(['/dashboard', this.selectedBoard, board.name]);
  }
}
