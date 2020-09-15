const fetch = require('node-fetch');
const swapi = require('./App2');

// test promise
it('calls swapi to get people', () => {
  swapi.getPeoplePromise(fetch).then(({ funcType, count, results }) => {
    expect(funcType).toEqual('Promis');
  });
});
