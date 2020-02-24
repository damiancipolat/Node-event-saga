const config = require('config');
const fetch  = require('node-fetch');

const {
  apiGet
} = config.get('resources');

//Request GET from api.
const getResource = async ()=> {

  const result = await fetch(apiGet);
  const body   = await result.json();
  
  return body;

}

module.exports = {
  getResource
}