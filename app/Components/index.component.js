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
var IndexComponent = (function () {
    function IndexComponent(_trelloService, router) {
        this._trelloService = _trelloService;
        this.router = router;
        this.boards = [];
        this.selectedBoard = null;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._trelloService.getUserBoards()
            .subscribe(function (p) { return _this.boards = p; });
    };
    IndexComponent.prototype.onBoardSelected = function (selectedBoard) {
        console.log(selectedBoard);
        this.selectedBoard = selectedBoard;
        this.router.navigate(['/dashboard', selectedBoard]);
    };
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