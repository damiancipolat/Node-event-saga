const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  FLOW_END
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

    //Make the message.
    const message = {
      uuid:uuid(),
      payload:{
        orderId,
        items,
        detail:{
          total:items.length,
          msg:'Thanks for buy'
        }
      }
    };

    //Emmit the event.
    emitter.emit(FLOW_END,message);
    console.log('Event emmited:',FLOW_END, message);

  } catch(err){

    console.log('Error:',err);

  }

}
  
module.exports = listener;