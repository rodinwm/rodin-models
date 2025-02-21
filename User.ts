import DatabaseEntity from "./DatabaseEntity";

export default class User extends DatabaseEntity {
  firstname: string;
  lastname: string;
  email: string;

  constructor(json: any) {
    super(json);
    this.firstname = json.firstname;
    this.lastname = json.lastname;
    this.email = json.email;
  }
}
