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

  if (res.status!=200)
    throw new Error('Error in order fetch request');

  return await res.json();
  
}

//Create the order by id.
const createOrder = async (userId, orderId, items)=>{
  
    const body = {
      userId,
      orderId,
      items
    };
   
    const request = {
      method: 'post',
      body:JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
  
    const res  = await fetch(create,request);
    
    if (res.status!=200)
      throw new Error('Error in order creation request');

    return await res.json();
  
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

  if (res.status!=200)
    throw new Error('Error in order update request');

  return await res.json();

}

module.exports = {
  getOrder,
  createOrder,
  updateOrder
};