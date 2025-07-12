import {AgeRange, ExerciseFrequency, NotificationType, Profession, SubscriptionStatus} from '../enums';
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
    TimeSessionTypeLabels
} from "../records";
import {RodinEnum} from "../types";

export class ModelService {
    private readonly maps: Record<string, Record<string, string>> = {
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

    constructor(
        private readonly onError: (methodName: string, error: any) => void,
    ) {
    }

    getExerciseFrequencies(): ExerciseFrequency[] {
        const methodName = "getExerciseFrequencies";
        try {
            return Object.values(ExerciseFrequency ?? {});
        } catch (error) {
            return this.handleError<ExerciseFrequency>(methodName, error);
        }
    }

    getAgeRanges(): AgeRange[] {
        const methodName = "getAgeRanges";
        try {
            return Object.values(AgeRange ?? {});
        } catch (error) {
            return this.handleError<AgeRange>(methodName, error);
        }
    }

    getNotificationTypes(): NotificationType[] {
        const methodName = "getNotificationTypes";
        try {
            return Object.values(NotificationType ?? {});
        } catch (error) {
            return this.handleError<NotificationType>(methodName, error);
        }
    }

    getProfessions(): Profession[] {
        const methodName = "getProfessions";
        try {
            return Object.values(Profession ?? {});
        } catch (error) {
            return this.handleError<Profession>(methodName, error);
        }
    }

    getSubscriptionStatus(): SubscriptionStatus[] {
        const methodName = "getSubscriptionStatus";
        try {
            return Object.values(SubscriptionStatus ?? {});
        } catch (error) {
            return this.handleError<SubscriptionStatus>(methodName, error);
        }
    }

    getEnumLabel<T extends RodinEnum>(enumType: T, value: string): string {
        return this.maps[enumType]?.[value] ?? value;
    }

    private handleError<T>(methodName: string, error: any): T[] {
        this.onError(methodName, error);
        return [];
    }
}