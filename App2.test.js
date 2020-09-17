const fetch = require('node-fetch');
const swapi = require('./App2');

// test promise to use async/await you need to edit timeout: 30000
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

// 3rd way using asyn/await
it('calls swapi to get people with async/await', async () => {
  // how many assertions expected
  expect.assertions(3);
  const { funcType, count, results } = await swapi.getPeopleAsync(fetch);
  //1st assertion
  expect(funcType).toEqual('Async/Await');
  //2nd assertion
  expect(count).toBeGreaterThan(5);
  //3rd assertion
  expect(results.length).toBeGreaterThan(5);
}, 40000);

// Mocks: fake functions and pretand running, it let us spy on the behavior of a function that is called indirectly by some other call instead of waiting
it('getPeople returns funcType count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          funcType: 'AsyncAwait',
          count: 82,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  expect.assertions(5);
  return swapi.getPeopleAsync(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    expect(data.funcType).toEqual('Async/Await');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
