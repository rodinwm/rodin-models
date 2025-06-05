import User from "./models/User";
import {TimerValue} from "./utils/interfaces";
import {AgeRange, ConcentrationExercise, ExerciseFrequency, NotificationType, Profession} from "./utils/enums";

// Module declaration
declare module "@rodinwm/rodin-models" {
    export {
        //Models
        User,

        // Enums
        ExerciseFrequency,
        AgeRange,
        Profession,
        ConcentrationExercise,
        NotificationType,

        // Interfaces
        TimerValue,
    };
}
