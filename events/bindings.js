//Get event listeners.
const {
  createOrder,
  createVoucher,
  makePayment,
  updateOrder,
  sendTicket,
  notifyFail
} = require('../events/commands');

//Import event names.
const {
  ORDER_CREATED,
  ORDER_CREATED_SUCCESS,
  ORDER_CREATED_FAIL,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  FLOW_END
} = require('./dictionary.js');
 
//Define relation event - function.
const bindings = [
  {
    event:ORDER_CREATED,
    listeners:[createOrder]
  },
  {
    event:ORDER_CREATED_SUCCESS,
    listeners:[makePayment]
  },
  {
    event:ORDER_CREATED_FAIL,
    listeners:[notifyFail]
  },
  {
    event:PAYMENT_FAIL,
    listeners:[updateOrder,notifyFail]
  },
  {
    event:PAYMENT_SUCCESS,
    listeners:[updateOrder,createVoucher]
  },
  {
    event:FLOW_END,
    listeners:[sendTicket]
  }  
];

module.exports = bindings;