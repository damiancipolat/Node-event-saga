const {
  getResource
} = require('../../service/mock.js');

const {
  EVENT_1,
  EVENT_1_SUCCESS,
  EVENT_1_FAIL
} = require('../dictionary.js')

const uuidv1 = require('uuid/v1');

//Process the event, if is success emit SUCCESS is error emit ERROR.
const listener = (emitter) => async (payload) => {

  try{

    console.log('Received event',EVENT_1);

    //Make the request.
    const response = await getResource();

    //Generate uuid.
    const uuid = uuidv1();
    
    //Make response.
    const payload = {
      uuid,
      response
    };

    console.log('Emit event -->',EVENT_1_SUCCESS, 'Payload',payload);
    emitter.emit(EVENT_1_SUCCESS, payload)

  } catch(err){

    console.log('Emit event -->',EVENT_1_FAIL);
    console.error('Error',err);

    emitter.emit(EVENT_1_FAIL,{error:err});

  }

 }

 module.exports = listener;