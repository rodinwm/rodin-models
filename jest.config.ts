// file: jest.config.ts

import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    coverageDirectory: 'tests/coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    reporters: [
        'default',
        ['jest-sonar', {
            outputDirectory: 'tests/coverage',
            outputName: 'sonar-report.xml',
        }],
    ],
};

export default config;