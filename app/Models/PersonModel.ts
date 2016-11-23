export class PersonModel {
  public Name:string; 
  public LastName:string;
  public id : number;
 
  constructor(name :string,lastName:string) {
      this.Name = name;
      this.LastName = lastName;
  }
}