"use strict";
var Board = (function () {
    function Board() {
    }
    return Board;
}());
exports.Board = Board;
var Organization = (function () {
    function Organization() {
    }
    return Organization;
}());
exports.Organization = Organization;
var RootObject = (function () {
    function RootObject(response) {
        debugger;
    }
    return RootObject;
}());
exports.RootObject = RootObject;
var LabelModel = (function () {
    function LabelModel(Name, uses, color) {
        this.Name = Name;
        this.uses = uses;
        this.color = color;
    }
    return LabelModel;
}());
exports.LabelModel = LabelModel;
var ListCardsCountModel = (function () {
    function ListCardsCountModel(ListName, CardCount) {
        this.ListName = ListName;
        this.CardCount = CardCount;
    }
    return ListCardsCountModel;
}());
exports.ListCardsCountModel = ListCardsCountModel;
//# sourceMappingURL=TrelloAPIModels.js.map