const googleSearch = require('./App');

dbMock = ['dog.com', 'cats.com', 'catsfood.com'];

it('Hello test', () => expect('hello').toBe('hello'));

test('GooogleSearch test 1', () => expect(googleSearch('csdsd', dbMock)).toEqual([]));

test('GooogleSearch test 2', () =>
  expect(googleSearch('cats', dbMock)).toEqual(['cats.com', 'catsfood.com']));
