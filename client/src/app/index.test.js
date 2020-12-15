import { sum } from "./index";
 
describe('Sum test', () => {
    test('Sum 1 + 2 should be 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    test('Sum 11 + 12 should be 23', () => {
        expect(sum(11,12)).toBe(23)
    })
})