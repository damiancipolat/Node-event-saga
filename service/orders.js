const config = require('config');
const fetch  = require('node-fetch');

const {
  create,
  get,
  update
} = config.get('services.orders');

//Get the order by id.
const getOrder = async (orderId)=>{

  const request = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const url  = get+'/'+orderId;
  const res  = await fetch(url,request);
  const json = await res.json();

  return json;
  
}

//Create the order by id.
const createOrder = async (userId, items)=>{
  
    const body = {
      userId,
      items
    };
   
    const request = {
      method: 'post',
      body:JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
  
    const res  = await fetch(create,request);
    const json = await res.json();
  
    return json;
  
  }

//Update the order by id and code.
const updateOrder = async (orderId, status)=>{
  
  const body = {
    orderId,
    status
  };
 
  const request = {
    method: 'put',
    body:JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };

  const res  = await fetch(notify,request);
  const json = await res.json();

  return json;

}

module.exports = {
  getOrder,
  createOrder,
  updateOrder
};