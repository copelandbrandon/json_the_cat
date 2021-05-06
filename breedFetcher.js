const request = require('request');

const fetchBreedDescription = function(inputName, callback) {
  const req = request(`https://api.thecatapi.com/v1/breeds/search?q=${inputName}`, (err, header, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('Cat not found!', null);
      return;
    } else {
      const description = data[0].description;
    
      callback(null, description);
    }
    //on response get status code and if it is 404 return error
    req.on('response', (response)=>{
      if (response.statusCode === 404) {
        callback('Request failed!', null);
        return;
      }
    });
  });

};






module.exports = { fetchBreedDescription };