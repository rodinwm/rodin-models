// file: src/utils/constants.ts

import {
    AgeRangeLabels,
    ConcentrationExerciseLabels,
    ExerciseFrequencyLabels,
    FriendStatusLabels,
    NotificationTypeLabels,
    ProfessionLabels,
    SubscriptionFrequencyLabels,
    SubscriptionStatusLabels,
    TimeSessionTypeLabels
} from "./records";
import {EnumTestCase} from "./types";
import {
    AgeRange,
    ConcentrationExercise,
    ExerciseFrequency,
    FriendStatus,
    NotificationType,
    Profession,
    SubscriptionFrequency,
    SubscriptionStatus,
    TimeSessionType,
} from '../frontend';


export const enumTestCases: EnumTestCase[] = [
    {enumName: 'SubscriptionStatus', enumObject: SubscriptionStatus, labels: SubscriptionStatusLabels},
    {enumName: 'SubscriptionFrequency', enumObject: SubscriptionFrequency, labels: SubscriptionFrequencyLabels},
    {enumName: 'FriendStatus', enumObject: FriendStatus, labels: FriendStatusLabels},
    {enumName: 'ConcentrationExercise', enumObject: ConcentrationExercise, labels: ConcentrationExerciseLabels},
    {enumName: 'Profession', enumObject: Profession, labels: ProfessionLabels},
    {enumName: 'NotificationType', enumObject: NotificationType, labels: NotificationTypeLabels},
    {enumName: 'AgeRange', enumObject: AgeRange, labels: AgeRangeLabels},
    {enumName: 'TimeSessionType', enumObject: TimeSessionType, labels: TimeSessionTypeLabels},
    {enumName: 'ExerciseFrequency', enumObject: ExerciseFrequency, labels: ExerciseFrequencyLabels},
];