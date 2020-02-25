const config = require('config');
const fetch  = require('node-fetch');

const {
  notify
} = config.get('services.notification');

//Send notification to the service.
const notify = async (deviceId, text)=>{
  
  const body = {
    deviceId,
    message: text
  };
 
  const request = {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };

  const res  = await fetch(notify,request);
  const json = await res.json();

  return json;

}

module.exports = {
  notify
};