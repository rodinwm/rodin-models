import type {AgeRange, ExerciseFrequency, Profession, SubscriptionStatus} from "@prisma/client";

export interface TimerValue {
    hours: number;
    minutes: number;
    seconds: number;
}

export interface UserUpdateData {
    id: string;
    pseudo?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    profession?: Profession;
    subscriptionStatus?: SubscriptionStatus;
    lastLogin?: string;
}

export interface CreateUserRequestBody {
    pseudo: string;
    email: string;
    phoneNumber?: string;
    password: string;
    defaultWorkTime?: TimerValue;
    defaultBreakTime?: TimerValue;
    exerciseFrequency?: ExerciseFrequency;
    emergencyCode: string;
    ageRange: AgeRange;
    profession: Profession;
    subscriptionStatus?: SubscriptionStatus;
}
