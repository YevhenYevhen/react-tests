import counterReducer, { increment, decrement } from "../counterReducer";

describe('getCounterReducer', () => {
    test('increment', () => {
        expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
    })
    test('decrement', () => {
        expect(counterReducer({ value: 3 }, decrement())).toEqual({ value: 2 });
    })
    test('with an empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
    })
})

