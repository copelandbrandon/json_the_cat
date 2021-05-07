const request = require('request');


const fetchBreedDescription = function(inputName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${inputName}`, (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      callback("Cat not found! "+err, null);
      return;
    } else if (response.statusCode !== 200) {
      callback(`Request failed! Status Code: ${response.statusCode}`, null)
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });

};





module.exports = { fetchBreedDescription };