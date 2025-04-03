// models/ReactivityTest.ts
import CognitiveExercise from "./CognitiveExercise";

export default class ReactivityTest extends CognitiveExercise {
  targetColor: string;
  distractionColor: string;
  maxTargets: number;

  constructor(json: any) {
    super(json);
    this.targetColor = json.targetColor;
    this.distractionColor = json.distractionColor;
    this.maxTargets = json.maxTargets;
  }
}