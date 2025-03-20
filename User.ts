// models/User.ts
import DatabaseEntity from "./DatabaseEntity";

export default class User extends DatabaseEntity {
  username: string;
  pseudo: string;
  email: string;
  emailVerified: boolean; 
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
    this.emailVerified = json.emailVerified || false; // Par défaut à false si non fourni
    this.phoneNumber = json.phoneNumber;
    this.passwordHash = json.passwordHash;
    this.lastLogin = json.lastLogin ? new Date(json.lastLogin) : undefined;
    this.subscriptionStatus = json.subscriptionStatus;
    this.professionId = json.professionId;
  }
}
