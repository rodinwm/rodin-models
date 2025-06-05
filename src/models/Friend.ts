// models/Friend.ts
import DatabaseEntity from "./DatabaseEntity";

export default class Friend extends DatabaseEntity {
  userId: string; // Utilisateur qui envoie la demande
  friendId: string; // Utilisateur cible
  status: string; // "pending", "accepted", "blocked"

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.friendId = json.friendId;
    this.status = json.status;
  }
}