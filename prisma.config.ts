import * as path from 'node:path';
import type { PrismaConfig } from 'prisma';
import dotenv from 'dotenv';

// Charge le fichier .env depuis la racine du projet
dotenv.config();

export default {
    earlyAccess: true,
    schema: path.join('src', 'prisma', 'schema.prisma'),
} satisfies PrismaConfig;