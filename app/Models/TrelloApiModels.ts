

    export class Organization {
        id: string;
        displayName: string;
    }
    export class RootObject {
        constructor(response:any){
            debugger;
        }
        id: string;
        username: string;
        fullName: string;
        url: string;
        boards: Board[];
        organizations: Organization[];
    }
    export class LabelModel{
        constructor (public Name : string, public uses:number, public color:string){
            
        }
    }
    export class ListCardsCountModel{
        constructor (public ListName: string,public CardCount:number){

        } 
    }

    export class ListAfter {
        name: string;
        id: string;
    }

    export class ListBefore {
        name: string;
        id: string;
    }

    export class Board {
        shortLink: string;
        name: string;
        id: string;
    }

    export class Card {
        shortLink: string;
        idShort: number;
        name: string;
        id: string;
        idList: string;
    }

    export class Old {
        idList: string;
    }

    export class Data {
        listAfter: ListAfter;
        listBefore: ListBefore;
        board: Board;
        card: Card;
        old: Old;
    }

    export class MemberCreator {
        id: string;
        avatarHash: string;
        fullName: string;
        initials: string;
        username: string;
    }

    export class Member {
        id: string;
        avatarHash: string;
        fullName: string;
        initials: string;
        username: string;
    }

    export class List {
        name: string;
        id: string;
    }

    export class CommentData {
        list: List;
        board: Board;
        card: Card;
        text: string;
    }

    export class Action {
        id: string;
        idMemberCreator: string;
        data: Data;
        type: string;
        date: Date;
        memberCreator: MemberCreator;
        member: Member;
    }

    export class Comments {
        id: string;
        idMemberCreator: string;
        data: CommentData;
        type: string;
        date: Date;
        memberCreator: MemberCreator;
    }
