

    export class Board {
        name: string;
        id: string;
    }
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

    export interface ListAfter {
        name: string;
        id: string;
    }

    export interface ListBefore {
        name: string;
        id: string;
    }

    export interface Board {
        shortLink: string;
        name: string;
        id: string;
    }

    export interface Card {
        shortLink: string;
        idShort: number;
        name: string;
        id: string;
        idList: string;
    }

    export interface Old {
        idList: string;
    }

    export interface Data {
        listAfter: ListAfter;
        listBefore: ListBefore;
        board: Board;
        card: Card;
        old: Old;
    }

    export interface MemberCreator {
        id: string;
        avatarHash: string;
        fullName: string;
        initials: string;
        username: string;
    }

    export interface Action {
        id: string;
        idMemberCreator: string;
        data: Data;
        type: string;
        date: Date;
        memberCreator: MemberCreator;
    }