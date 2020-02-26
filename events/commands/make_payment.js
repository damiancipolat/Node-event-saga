const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  payOrder
} = require('../../service/payment');

const {
  PAYMENT_FAIL,
  PAYMENT_SUCCESS
} = require('../dictionary.js');

const listener = (emitter) => async (event) => {

  try{

    const {
      payload
    } = event;
  
    assert(payload, 'event bad format');

    const {
      orderId,
      items
    } = payload;

    assert(orderId&&items, 'event bad format');

    //Send request.
    const result = await payOrder(orderId,items);

    //Make the message.
    const message = {
      uuid:uuid(),
      payload:result
    };

    //Emmit the event.
    emitter.emit(PAYMENT_SUCCESS,message);
    console.log('Event emmited:',PAYMENT_SUCCESS, message);

  } catch(err){

    console.log('Error:',err);

    //Make the message.
    const message = {
      uuid: uuid(),
      detail: err
    };

    //Emmit the event.
    emitter.emit(PAYMENT_FAIL,message);
    console.log('Event emmited:',PAYMENT_FAIL, message);

  }

}
  
module.exports = listener;