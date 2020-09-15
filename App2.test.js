const fetch = require('node-fetch');
const swapi = require('./App2');

// test promise to use asyn text you need to edit timeout: 30000
// 1st way: add done so we wait the promise to finish then pass to the next one and add timeout
it('calls swapi to get people with done', done => {
  // how many assertions we expect, to test them all before go to the next
  expect.assertions(3);
  swapi.getPeoplePromise(fetch).then(({ funcType, count, results }) => {
    //1st assertion
    expect(funcType).toEqual('Promise');
    //2nd assertion
    expect(count).toEqual(82);
    //3rd assertion
    expect(results.length).toBeGreaterThan(5);
    done();
  });
}, 30000);

// 2nd way: add return instead of done()
it('calls swapi to get people with return', () => {
  // how many assertions expected
  expect.assertions(3);
  return swapi.getPeoplePromise(fetch).then(({ funcType, count, results }) => {
    //1st assertion
    expect(funcType).toEqual('Promise');
    //2nd assertion
    expect(count).toBeGreaterThan(5);
    //3rd assertion
    expect(results.length).toBeGreaterThan(5);
  });
}, 30000);

it('calls swapi to get people with async/await', async () => {
  // how many assertions expected
  expect.assertions(3);
  const data = await swapi.getPeopleAsync(fetch);
  //assertion
  expect(data.funcType).toEqual('Async/Await');
  expect(data.count).toEqual(20);
  expect(data.results).toEqual('Async/Await');
}, 30000);
