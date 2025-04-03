// models/BreathingExercise.ts
import CognitiveExercise from "./CognitiveExercise";

export default class BreathingExercise extends CognitiveExercise {
  inhaleDuration: number; // en secondes
  exhaleDuration: number; // en secondes
  holdDuration?: number; // en secondes (optionnel)

  constructor(json: any) {
    super(json);
    this.inhaleDuration = json.inhaleDuration;
    this.exhaleDuration = json.exhaleDuration;
    this.holdDuration = json.holdDuration;
  }
}