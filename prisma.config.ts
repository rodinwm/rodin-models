import * as path from 'node:path';
import { config } from 'dotenv';
import type { PrismaConfig } from 'prisma';

// Charge .env à la racine du projet
config({ path: path.resolve(__dirname, '.env') });

export default {
    earlyAccess: true,
    schema: path.join('src', 'prisma', 'schema.prisma'),
} satisfies PrismaConfig;