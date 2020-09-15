const googleDatabase = [
  'cats.com',
  'dogs.com',
  'catsfood.com',
  'catsmeow.com',
  'ilovecats',
  'animals.com',
  'pets.com'
];

const googleSearch = (searchIput, DB) => {
  const matches = DB.filter(data => data.includes(searchIput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
