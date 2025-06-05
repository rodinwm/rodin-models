// models/Subscription.ts
import DatabaseEntity from "./DatabaseEntity";

export default class Subscription extends DatabaseEntity {
  userId: string;
  startDate: Date;
  endDate?: Date;
  status: string; // "active", "inactive", "cancelled"

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.startDate = new Date(json.startDate);
    this.endDate = json.endDate ? new Date(json.endDate) : undefined;
    this.status = json.status;
  }
}