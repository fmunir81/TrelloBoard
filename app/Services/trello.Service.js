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
var TrelloAPIModels_1 = require('../Models/TrelloAPIModels');
var http_1 = require('@angular/http');
var PEOPLE = [
    { id: 1, Name: 'Luke', LastName: 'Skywalker' },
    { id: 2, Name: 'Darth', LastName: 'Vader' },
    { id: 3, Name: 'Han', LastName: 'Solo' },
];
//https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/
var TrelloAPI = (function () {
    function TrelloAPI(http) {
        this.http = http;
        this.applicationKey = "aeb9fdc2672e33ac666105e8048246de";
        this.authToken = "11926bdc8da2b0e56b18c80844f8a7f819b8527269a183600ab41cc255cdd4da";
        this.apiUrl = "https://api.trello.com/1/";
    }
    TrelloAPI.prototype.getUserBoards = function () {
        var url = this.apiUrl + "members/me?fields=username&boards=all&board_fields=name&key=" + this.applicationKey + "&token=" + this.authToken;
        var people$ = this.http
            .get(url, { headers: this.getHeaders() })
            .map(this.mapBoards);
        return people$;
    };
    TrelloAPI.prototype.mapBoards = function (response) {
        return new TrelloAPIModels_1.TrelloApiModels.RootObject(response.json().results);
    };
    TrelloAPI.prototype.getAll = function () {
        var _this = this;
        return PEOPLE.map(function (p) { return _this.clone(p); });
    };
    TrelloAPI.prototype.get = function (id) {
        return this.clone(PEOPLE.find(function (p) { return p.id === id; }));
    };
    TrelloAPI.prototype.save = function (person) {
        var originalPerson = PEOPLE.find(function (p) { return p.id === person.id; });
        if (originalPerson)
            Object.assign(originalPerson, person);
        // saved muahahaha
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