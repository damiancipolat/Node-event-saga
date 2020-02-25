const config = require('config');
const fetch  = require('node-fetch');

const {
  pay
} = config.get('services.payment');

//Send payment to the service.
const pay = async (orderId, items)=>{
  
  const body = {
    orderId,
    items
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
  pay
};