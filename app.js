const events = require('events');

const {
  registerAll
} = require('./lib/events.js');

const {
  EVENT_1
} = require('./events/dictionary.js');

//Get the bindings.
const bindings = require('./events/bindings.js');

//Create the event emitter.
const eventEmitter = new events.EventEmitter();

//Register the events.
registerAll(eventEmitter, bindings);

eventEmitter.emit(EVENT_1,{name:1234});


/*
https://hackernoon.com/event-driven-architecture-implementation-140c51820845
eventEmitter.on('connection', listner1);
eventEmitter.on('connection', listner2);

eventEmitter.emit('connection',{name:1234});

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
*/