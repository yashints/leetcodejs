import { describe, test, expect } from "@jest/globals";
import { shortestToChar } from ".";

describe('Shortest distance to char should:', () => {
    test('Return the correct distance', () => {
        const s = "loveleetcode";
        const c = "e";
        const result = shortestToChar(s, c);

        expect(result).toEqual([3,2,1,0,1,0,0,1,2,2,1,0]);
    });

    test('Return the correct distance', () => {
        const s = "aaab";
        const c = "b";
        const result = shortestToChar(s, c);

        expect(result).toEqual([3,2,1,0]);
    });
})