import DatabaseEntity from "./DatabaseEntity";

import DatabaseEntity from "./DatabaseEntity";

export default class User extends DatabaseEntity {
  username: string;
  pseudo: string;
  email: string;
  phoneNumber?: string;
  passwordHash: string;
  lastLogin?: Date;
  subscriptionStatus: string; // "free" ou "premium"
  professionId?: string;

  constructor(json: any) {
    super(json);
    this.username = json.username;
    this.pseudo = json.pseudo;
    this.email = json.email;
    this.phoneNumber = json.phoneNumber;
    this.passwordHash = json.passwordHash;
    this.lastLogin = json.lastLogin ? new Date(json.lastLogin) : undefined;
    this.subscriptionStatus = json.subscriptionStatus;
    this.professionId = json.professionId;
  }
}
