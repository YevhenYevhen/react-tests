import { getCounterValue } from "./getCounterValue";

describe('getCounterValue', () => {
    test('work with an empty state', () => {
        expect(getCounterValue({})).toBe(0);
    })
    test('work with non-empty state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100);
    })
})
