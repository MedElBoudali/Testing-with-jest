const googleSearch = require('./App');

dbMock = ['dog.com', 'cats.com', 'catsfood.com', 'petsfood.com'];

// use describe group tests ex: group all test for googleSearch
describe('googleSearch', () => {
  it('is a hello test', () => expect('hello').toBe('hello'));

  test('gooogleSearch with nonexistent value', () =>
    expect(googleSearch('csdsd', dbMock)).toEqual([]));

  test('gooogleSearch with existing value', () =>
    expect(googleSearch('cats', dbMock)).toEqual(['cats.com', 'catsfood.com']));

  it('work with undefined and null inputs', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () =>
    expect(googleSearch('.com', dbMock).length).toEqual(3));
});
