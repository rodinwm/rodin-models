// file: tests/services/modelService.spec.ts

import {ModelService} from '../../src/frontend';
import {enumTestCases} from "../../src/utils/constants";

describe('✅ ModelService', () => {
    const logMock = jest.fn();
    const service = new ModelService(logMock);

    enumTestCases.forEach(({enumName, enumObject, labels}) => {
        describe(`Enum: ${enumName}`, () => {
            it('should return all enum values with getEnumValues()', () => {
                const values = service.getEnumValues(enumName);
                expect(values).toEqual(Object.values(enumObject));
                expect(values.length).toBeGreaterThan(0);
            });

            it('should return the correct label for each value with getEnumLabel()', () => {
                const values = Object.values(enumObject);
                for (const val of values) {
                    const label = service.getEnumLabel(enumName, val);
                    expect(typeof label).toBe('string');
                    expect(label).toBe(labels[val]);
                }
            });
        });
    });

    it('should fallback on raw value if label is missing', () => {
        const unknownValue = 'UNKNOWN_VALUE';
        const label = service.getEnumLabel('ConcentrationExercise', unknownValue);
        expect(label).toBe(unknownValue);
    });

    it('should handle unknown enum name gracefully in getEnumValues()', () => {
        // @ts-expect-error testing bad usage
        const values = service.getEnumValues('UnmappedEnum');
        expect(values).toEqual([]);
        expect(logMock).toHaveBeenCalledWith(
            'getEnumValues(UnmappedEnum)',
            expect.any(Error)
        );
    });
});