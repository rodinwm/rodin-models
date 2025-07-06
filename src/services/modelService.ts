import {AgeRange, ExerciseFrequency, NotificationType, Profession, SubscriptionStatus} from '../frontend';

export class ModelService {

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

    private handleError<T>(methodName: string, error: any): T[] {
        this.onError(methodName, error);
        return [];
    }
}