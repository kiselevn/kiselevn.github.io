const methods = require('./methodsForTest');


// ForEach
const arrForForEach = [1,2,4,5,6,42];

test('Testing ForEach', () => {
  let counter = 0;
  expect(methods.forEach(() => {return ++counter} , arrForForEach)).toBe(6);
});
// end

// filter
const arrForFilter = [1, -1, 2, -2, 3];


describe('Test group for Filter:', () => {
  test('Testing Filter for n > 0', () => {
    expect(methods.filter(n => n > 0, arrForFilter)).toEqual([1, 2, 3]);
  });

  test('Testing filter for n < 0', () => {
    expect(methods.filter(n => n < 0, arrForFilter)).toEqual([-1, -2]);
  });
});
// end

// map
const arrForMap = ['HTML', 'CSS', 'JavaScript'];

test('Map: length strings in array', () => {
  expect(methods.map(n => n.length, arrForMap)).toEqual([4, 3, 10]);
});
// end



const arrF = [1, 1, -2];
const arrT = [-1, -2, -5];

// every
describe('Test group for Every:', () => {
  test('Every false', () => {
    expect(methods.every(n => n > 0, arrF)).toBe(false);
  });

  test('Every true', () => {
    expect(methods.every(n => n < 0, arrT)).toBe(true);
  });
});
// end

// some
describe('Test group for Some:', () => {
  test('Some true', () => {
    expect(methods.some(n => n < 0, arrT)).toBe(true);
  });

  test('Some False', () => {
    expect(methods.some(n => n > 0, arrT)).toBe(false);
  });
});
// end