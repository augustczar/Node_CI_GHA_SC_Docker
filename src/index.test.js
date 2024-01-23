const index = require('./index');

test('Apply Discount', () => {
    const result = index.applyDiscount(10, 5);
    expect(result).toEqual(5);
})

test('Apply big discount', () => {
    const result = index.applyDiscount(5, 10);
    expect(result).toEqual(0);
})
