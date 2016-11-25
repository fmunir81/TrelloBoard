"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var trello_Service_1 = require('../Services/trello.Service');
var router_1 = require('@angular/router');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var IndexComponent = (function () {
    function IndexComponent(_trelloService, router) {
        this._trelloService = _trelloService;
        this.router = router;
        this.boards = [];
        this.authStatus = false;
        this.selectedBoard = "";
        this.trelloObj = Trello;
    }
    IndexComponent.prototype.authenticateOnTrello = function () {
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
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.authenticateOnTrello();
    };
    IndexComponent.prototype.getBoards = function () {
        var _this = this;
        this._trelloService.getUserBoards()
            .subscribe(function (p) { return _this.boards = p; });
    };
    IndexComponent.prototype.onBoardSelected = function (board) {
        debugger;
        console.log(board.id);
        this.selectedBoard = board.id;
        this.router.navigate(['/dashboard', this.selectedBoard, board.name]);
    };
    __decorate([
        core_1.ViewChild('myModald'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], IndexComponent.prototype, "modal", void 0);
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'trello-app',
            templateUrl: './app/Views/Index.html',
            providers: [trello_Service_1.TrelloAPI]
        }), 
        __metadata('design:paramtypes', [trello_Service_1.TrelloAPI, router_1.Router])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map