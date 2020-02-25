const ev_1 = require('./ev_1.js');
const ev_2 = require('./ev_2.js');
const ev_3 = require('./ev_3.js');
const ev_4 = require('./ev_4.js');

const ev_1_ok  = require('./ev-1-error.js');
const ev_1_err = require('./ev-1-success.js');

module.exports = {
  createOrder:()=>null,
  makePayment:()=>null,
  updateOrder:()=>null,
  createVoucher:()=>null,
  sendTicket:()=>null,
  notifyFail:()=>null,
  ev_1_ok,
  ev_1_err,
  ev_1,
  ev_2,
  ev_3,
  ev_4
};