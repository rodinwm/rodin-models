// file: src/backend.ts
import {setupPrismaEngine} from "./prisma/operations/setup-prisma-engine";

setupPrismaEngine();

export {prisma as prismaClient} from './prisma/prisma';
export * from '../dist/generated/client';
export * from './utils/interfaces';
export * from './utils/services';
export * from './utils/records';
export * from './utils/types';
