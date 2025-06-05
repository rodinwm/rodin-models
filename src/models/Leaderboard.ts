// models/Leaderboard.ts
import DatabaseEntity from "./DatabaseEntity";

export default class Leaderboard extends DatabaseEntity {
  userId: string;
  totalPoints: number;
  rank: number;
  lastUpdated: Date;

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.totalPoints = json.totalPoints;
    this.rank = json.rank;
    this.lastUpdated = new Date(json.lastUpdated);
  }
}