// models/CognitiveExercise.ts
import DatabaseEntity from "./DatabaseEntity";

export default class CognitiveExercise extends DatabaseEntity {
  name: string;
  description: string;
  duration: number; // en secondes
  type: string; // "reactivity_test", "memory_exercise", "breathing_exercise"

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.description = json.description;
    this.duration = json.duration;
    this.type = json.type;
  }
}