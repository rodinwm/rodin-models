// models/MemoryExercise.ts
import CognitiveExercise from "./CognitiveExercise";

export default class MemoryExercise extends CognitiveExercise {
  patternLength: number;
  reproductionTime: number; // en secondes

  constructor(json: any) {
    super(json);
    this.patternLength = json.patternLength;
    this.reproductionTime = json.reproductionTime;
  }
}