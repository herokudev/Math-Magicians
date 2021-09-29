const sum = require('./sum'); // You need to import the file you want to test

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
