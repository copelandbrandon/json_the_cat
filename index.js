const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, description)=> {
  if (description === null) {
    console.log('ERROR: ', err);
  } else {
    console.log('Description: ', description);
  }
});
