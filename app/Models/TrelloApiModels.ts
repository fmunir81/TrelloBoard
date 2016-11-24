

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
    export class LabelModel{
        constructor (public Name : string, public uses:number, public color:string){
            
        }
    }