const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  updateOrder
} = require('../../service/orders');

const listener = (emitter) => async (event) => {

  try{

    //Make rollback if the order id is defined.
    if (event&&event.orderId){

      const {
        payload
      } = event;
  
      const {
        orderId
      } = payload;

      //Send request.
      const result = await updateOrder(orderId,'Failed');
      console.log('Order updated Failed:', result);

    }

  } catch(err){
    console.log('Error:',err);
  }

}
  
module.exports = listener;