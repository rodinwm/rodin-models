// file: tests/enums.spec.ts

import {ModelService} from '../src/utils/services';
import {enumTestCases} from "../src/utils/constants";

describe('✅ Enums + Labels', () => {
    const modelService = new ModelService((method, err) =>
        console.error(`[ERROR] ${method} failed:`, err)
    );
    
    enumTestCases.forEach(({enumName, enumObject, labels}) => {
        describe(`${enumName}`, () => {
            it('should be defined', () => {
                expect(enumObject).toBeDefined();
            });

            it('should convert to array of strings', () => {
                const values = Object.values(enumObject);
                console.log(`📦 ${enumName} values:`, values);
                expect(Array.isArray(values)).toBe(true);
                expect(values.length).toBeGreaterThan(0);
            });

            it('should have matching labels for all values', () => {
                const values = Object.values(enumObject);
                values.forEach(val => {
                    const label = labels[val];
                    console.log(`🔖 ${enumName}.${val} = ${label}`);
                    expect(label).toBeDefined();
                });
            });

            it('getEnumLabel() should return correct label', () => {
                const values = Object.values(enumObject);
                values.forEach(val => {
                    const label = modelService.getEnumLabel(enumName, val);
                    console.log(`✅ getEnumLabel('${enumName}', '${val}') = "${label}"`);
                    expect(label).toBeDefined();
                    expect(typeof label).toBe('string');
                });
            });
        });
    });
});