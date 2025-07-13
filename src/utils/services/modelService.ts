// file: src/utils/services/ModelService.ts

import {
    AgeRange,
    AppType,
    ConcentrationExercise,
    ExerciseFrequency,
    FriendStatus,
    NotificationType,
    Profession,
    SubscriptionFrequency,
    SubscriptionStatus,
    TimeSessionType
} from '../../../src/frontend';


import {
    AgeRangeLabels,
    AppTypeLabels,
    ConcentrationExerciseLabels,
    ExerciseFrequencyLabels,
    FriendStatusLabels,
    NotificationTypeLabels,
    ProfessionLabels,
    SubscriptionFrequencyLabels,
    SubscriptionStatusLabels,
    TimeSessionTypeLabels,
} from '../records';

import {RodinEnumMap, RodinEnumName} from '../types';

export class ModelService {
    private readonly maps: Record<RodinEnumName, Record<string, string>> = {
        AppType: AppTypeLabels,
        SubscriptionStatus: SubscriptionStatusLabels,
        SubscriptionFrequency: SubscriptionFrequencyLabels,
        FriendStatus: FriendStatusLabels,
        ConcentrationExercise: ConcentrationExerciseLabels,
        Profession: ProfessionLabels,
        NotificationType: NotificationTypeLabels,
        AgeRange: AgeRangeLabels,
        TimeSessionType: TimeSessionTypeLabels,
        ExerciseFrequency: ExerciseFrequencyLabels,
    };
    /**
     * Mapping entre les noms d'enum et les objets enum réels
     */
    private readonly enumMap: RodinEnumMap = {
        AppType,
        SubscriptionStatus,
        SubscriptionFrequency,
        FriendStatus,
        ConcentrationExercise,
        Profession,
        NotificationType,
        AgeRange,
        TimeSessionType,
        ExerciseFrequency,
    };

    constructor(private readonly onError: (methodName: string, error: any) => void) {
    }

    /**
     * Récupère dynamiquement les valeurs d'une énum (via son nom)
     */
    getEnumValues<T extends RodinEnumName>(enumName: T): string[] {
        const methodName = `getEnumValues(${enumName})`;
        try {
            const enumObject = this.enumMap[enumName];
            if (!enumObject) throw new Error(`Enum ${enumName} is not mapped`);
            return Object.values(enumObject);
        } catch (error) {
            return this.handleError<string>(methodName, error);
        }
    }

    /**
     * Retourne un label lisible pour une valeur d’enum
     */
    getEnumLabel<T extends RodinEnumName>(enumType: T, value: string): string {
        return this.maps[enumType]?.[value] ?? value;
    }

    private handleError<T>(methodName: string, error: any): T[] {
        this.onError(methodName, error);
        return [];
    }
}