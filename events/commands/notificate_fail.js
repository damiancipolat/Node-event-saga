const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  sendNotification
} = require('../../service/notification');

const listener = (emitter) => async (event) => {

  try{

    const msg = 'Error procesing';
    
    //Send request.
    const result = await sendNotification('mock',msg);
    console.log('Flow fail:', result);

  } catch(err){
    console.log('Error:',err);
  }

}
  
module.exports = listener;