// src/backend.ts
import {setupPrismaEngine} from "./prisma/operations/setup-prisma-engine";
import Stripe from 'stripe';

setupPrismaEngine();

export {prisma as prismaClient} from './prisma/prisma';
export * from '../dist/generated/client';
export * from './utils/enums';
export * from './utils/interfaces';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});