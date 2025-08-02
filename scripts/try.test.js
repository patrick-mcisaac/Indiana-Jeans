import { sum } from "./try.js";

describe(`sum > 2 numbers`, () => {

    it(`returns 5`,() => {

        expect(sum(2,3)).toBe(5)
    })
})