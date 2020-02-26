const events = require('events');

const {
  registerAll
} = require('./lib/events.js');

const {
  ORDER_CREATED
} = require('./events/dictionary.js');

//Get the bindings.
const bindings = require('./events/bindings.js');

//Create the event emitter.
const eventEmitter = new events.EventEmitter();

//Register the events.
registerAll(eventEmitter, bindings);

eventEmitter.emit(ORDER_CREATED,{
  uuid:1324324324324324,
  user:'mock',
  orderId:1,
  items:[
    {code:'001',name:'milk'},
    {code:'002',name:'sugar'},
    {code:'003',name:'chesse'}
  ]
});