const googleSearch = require('./App');

dbMock = ['dog.com', 'cats.com', 'catsfood.com', 'petsfood.com'];

it('is a hello test', () => expect('hello').toBe('hello'));

test('GooogleSearch with not existing value', () =>
  expect(googleSearch('csdsd', dbMock)).toEqual([]));

test('GooogleSearch with existing value', () =>
  expect(googleSearch('cats', dbMock)).toEqual(['cats.com', 'catsfood.com']));

it('work with undefined and null inputs', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});

it('does not return more than 3 matches', () =>
  expect(googleSearch('.com', dbMock).length).toEqual(3));
