import { fibonacci } from "../model/fibonacci.js";
import { describe, expect, test } from '@jest/globals';

describe('fibonacci', () => {
    test('first 6 Fibonacci numbers', () => {
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    });

    test('first 8 Fibonacci numbers', () => {
        expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });
});