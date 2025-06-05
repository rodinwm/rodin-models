// models/ExerciseResult.ts
import DatabaseEntity from "./DatabaseEntity";

export default class ExerciseResult extends DatabaseEntity {
  userId: string;
  exerciseId: string;
  score: number;
  date: Date;

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.exerciseId = json.exerciseId;
    this.score = json.score;
    this.date = new Date(json.date);
  }
}