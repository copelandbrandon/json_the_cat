const request = require('request');
const inputName = process.argv[2];
let req = request(`https://api.thecatapi.com/v1/breeds/search?q=${inputName}`, (err, header, body) => {

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('ERROR: Cat not found!');
    return;
  }
  console.log('Data: ', data);
  console.log('Type of data: ',typeof data);
  console.log('Description: ', data[0].description);
});

req.on('response', (response)=>{
  if (response.statusCode === 404) {
    console.log('ERROR: request for cat failed');
    return;
  }
  console.log(response.statusCode);
});