// models/WorkSession.ts
import DatabaseEntity from "./DatabaseEntity";

export default class WorkSession extends DatabaseEntity {
  userId: string;
  startTime: Date;
  endTime: Date;
  workDuration: number; // en minutes
  breakDuration: number; // en minutes
  notes?: string;

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.startTime = new Date(json.startTime);
    this.endTime = new Date(json.endTime);
    this.workDuration = json.workDuration;
    this.breakDuration = json.breakDuration;
    this.notes = json.notes;
  }
}