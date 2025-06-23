// scripts/copy-engines.ts
import fs from 'fs';
import path from 'path';

const sourceDir = path.resolve(__dirname, '../node_modules/.prisma/client');
const targetDir = path.resolve(__dirname, '../dist/generated/client');

if (!fs.existsSync(sourceDir)) {
    throw new Error('Prisma engine folder not found');
}

fs.readdirSync(sourceDir).forEach((file) => {
    if (file.includes('query_engine') && file.endsWith('.node')) {
        const src = path.join(sourceDir, file);
        const dest = path.join(targetDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to client folder.`);
    }
});