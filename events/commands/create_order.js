const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  createOrder
} = require('../../service/orders.js');

const {
  ORDER_CREATED_SUCCESS,
  ORDER_CREATED_FAIL
} = require('../dictionary.js');

const listener = (emitter) => async (payload) => {

  try{

    //Get the fields.
    const {
      orderId,
      user,
      items
    } = payload;

    assert(orderId&&user&&items,'Required fields in order');

    //Send request.
    const result = await createOrder();

    //Make the message.
    const message = {
      uuid:uuid(),
      payload:{
        orderId,
        items,
        ...result
      }
    };

    //Emmit the event.
    emitter.emit(ORDER_CREATED_SUCCESS,message);
    console.log('Event emmited:',ORDER_CREATED_SUCCESS, message);

  } catch(err){

    console.log('Error:',err);

    //Make the message.
    const message = {
      uuid: uuid(),
      detail: err
    };

    //Emmit the event.
    emitter.emit(ORDER_CREATED_FAIL,message);
    console.log('Event emmited:',ORDER_CREATED_FAIL, message);

  }

}
  
module.exports = listener;