const { applyDiscount, sum, sub, times, div } = require('./index');

test('Apply Discount', () => {
    const result = index.applyDiscount(10, 5);
    expect(result).toEqual(5);
});

test('Apply big discount', () => {
    const result = index.applyDiscount(5, 10);
    expect(result).toEqual(0);
});

test(`add 10 + 5 be equal 15`, () => {
    expect(sum(10, 5)).toBe(15);
});

test(`sub 10 - 5 be equal 5`, () => {
    expect(sub(10, 5)).toBe(5);
});

test(`sub 8 - 4 be equal 4`, () => {
    expect(sub(8, 4)).toBe(4);
});

test(`times 10 * 5 be equal 50`, () => {
    expect(times(10, 5)).toBe(50);
});

test(`div 10 / 5 be equal 2`, () => {
    expect(div(10, 5)).toBe(2);
});