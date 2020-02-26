const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  updateOrder
} = require('../../service/orders');

const listener = (emitter) => async (event) => {

  try{

    const {
      payload
    } = event;
  
    assert(payload, 'event bad format');

    const {
      orderId
    } = payload;

    assert(orderId, 'event bad format');

    //Send request.
    const result = await updateOrder(orderId,'PAYED');
    console.log('Order updated OK:', result);

  } catch(err){
    console.log('Error:',err);
  }

}
  
module.exports = listener;