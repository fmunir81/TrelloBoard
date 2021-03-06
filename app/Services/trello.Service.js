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
var TrelloApiModels = require('../Models/TrelloAPIModels');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var TrelloAPI = (function () {
    function TrelloAPI(http) {
        this.http = http;
        this.applicationKey = "aeb9fdc2672e33ac666105e8048246de";
        this.authToken = localStorage.getItem("trello_token"); //"11926bdc8da2b0e56b18c80844f8a7f819b8527269a183600ab41cc255cdd4da";
        this.apiUrl = "https://api.trello.com/1/";
        this.authStatus = true;
    }
    TrelloAPI.prototype.getUserBoards = function () {
        var url = this.apiUrl + "members/me?fields=username&boards=all&board_fields=name&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
        var boards$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapBoards);
        return boards$;
    };
    TrelloAPI.prototype.getRecentActions = function (boardId) {
        var url = this.apiUrl + "boards/" + boardId + "/actions?filter=addAttachmentToCard,addMemberToCard,updateCard:idList&limit=10&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
        var actions$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapActions);
        return actions$;
    };
    TrelloAPI.prototype.getRecentComments = function (boardId) {
        var url = this.apiUrl + "boards/" + boardId + "/actions?filter=commentCard&limit=10&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
        ;
        var comments$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapComments);
        return comments$;
    };
    TrelloAPI.prototype.getIFLabelsStats = function (boardId) {
        var url = this.apiUrl + "boards/" + boardId + "/labels?key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
        var ifLabels$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapIFLabels);
        return ifLabels$;
    };
    TrelloAPI.prototype.getListsCardsCount = function (boardId) {
        var url = this.apiUrl + "boards/" + boardId + "/lists?cards=all&card_fields=name&fields=name&key=" + this.applicationKey + "&token=" + localStorage.getItem("trello_token");
        var listCardCounts$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapListCardCounts);
        return listCardCounts$;
    };
    TrelloAPI.prototype.mapListCardCounts = function (response) {
        var lists = response.json();
        var listsCardCount = lists.filter(function (list) {
            return list["cards"].length > 0;
        }).map(function (list) {
            return new TrelloApiModels.ListCardsCountModel(list["name"], list["cards"].length);
        });
        return listsCardCount;
    };
    TrelloAPI.prototype.mapIFLabels = function (response) {
        var boards = response.json();
        var ifBoards = boards.filter(function (label) {
            return label["name"].startsWith('IF') || label["name"].startsWith('I.F.');
        }).map(function (label) {
            var color = label["color"] == "sky" ? "#C0C0C0" : label["color"];
            return new TrelloApiModels.LabelModel(label["name"], label["uses"], color);
        });
        return ifBoards;
    };
    TrelloAPI.prototype.mapBoards = function (response) {
        var boards = response.json().boards;
        return boards;
    };
    TrelloAPI.prototype.mapActions = function (response) {
        var actions = response.json();
        return actions;
    };
    TrelloAPI.prototype.mapComments = function (response) {
        var comments = response.json();
        return comments;
    };
    TrelloAPI.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    TrelloAPI.prototype.clone = function (object) {
        // hack
        return JSON.parse(JSON.stringify(object));
    };
    TrelloAPI = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TrelloAPI);
    return TrelloAPI;
}());
exports.TrelloAPI = TrelloAPI;
//# sourceMappingURL=trello.Service.js.map