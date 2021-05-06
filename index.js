const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (description, err)=> {
  if (description === null) {
    console.log('ERROR: ', err);
  } else {
    console.log('Description: ', description);
  }
});