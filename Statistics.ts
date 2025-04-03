// models/Statistics.ts
import DatabaseEntity from "./DatabaseEntity";

export default class Statistics extends DatabaseEntity {
  userId: string;
  totalWorkTime: number; // en minutes
  totalExerciseTime: number; // en minutes
  averageScore: number;
  lastUpdated: Date;

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.totalWorkTime = json.totalWorkTime;
    this.totalExerciseTime = json.totalExerciseTime;
    this.averageScore = json.averageScore;
    this.lastUpdated = new Date(json.lastUpdated);
  }
}