import fs from 'fs';
import path from 'path';

const SCHEMA_PATH = path.resolve(__dirname, '../prisma/schema.prisma');
const OUTPUT_PATH = path.resolve(__dirname, '../src/utils/enums.ts');

const schema = fs.readFileSync(SCHEMA_PATH, 'utf-8');

const enumRegex = /enum\s+(\w+)\s+\{([^}]+)\}/g;

const enums: { name: string; values: string[] }[] = [];
let match;

while ((match = enumRegex.exec(schema)) !== null) {
    const name = match[1];
    const values = match[2].trim().split(/\s+/);
    enums.push({name, values});
}

const enumFileContent = `// ⚠️ Auto-generated from schema.prisma
// Do not edit manually.

${enums.map(({name, values}) => {
    return `export enum ${name} {
${values.map((v) => `  ${v} = "${v}",`).join('\n')}
}\n`;
}).join('\n')}
`;

fs.writeFileSync(OUTPUT_PATH, enumFileContent, 'utf-8');
console.log(`✅ enums.ts generated at ${OUTPUT_PATH}`);