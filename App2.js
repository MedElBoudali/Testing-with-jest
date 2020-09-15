const fetch = require('node-fetch');

// Promise
const getPeoplePromise = fetch =>
  fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
      return { funcType: 'Promise', count: data.count, results: data.results };
    });

// getPeoplePromise(fetch);

// Async/Await
const getPeopleAsync = async fetch => {
  const getRequest = await fetch('https://swapi.dev/api/people');
  const getData = await getRequest.json();
  return { funcType: 'Async/Await', count: getData.count, results: getData.results };
};

// getPeopleAsync(fetch);

module.exports = { getPeoplePromise, getPeopleAsync };
