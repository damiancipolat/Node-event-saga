//Get event listeners.
const {
  ev_1,
  ev_1_ok,
  ev_1_err,
  ev_2,
  ev_3,
  ev_4
} = require('../events/commands');

//Import event names.
const {
  EVENT_1,
  EVENT_1_SUCCESS,
  EVENT_1_FAIL,
  EVENT_2,
  EVENT_3,
  EVENT_3_FAIL,
  EVENT_4
} = require('./dictionary.js');
 
//Define relation event - function.
const bindings = [
  {
    event: EVENT_1,
    listeners:[ev_1]
  },  
  {
    event: EVENT_1_SUCCESS,
    listeners:[]
  },
  {
    event: EVENT_1_FAIL,
    listeners:[]
  }
];

module.exports = bindings;