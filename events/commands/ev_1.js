const {
  getResource
} = require('../../service/mock.js');

const uuidv1 = require('uuid/v1');

//Process the event, if is success emit SUCCESS is error emit ERROR.
const listener = (emitter) => async (payload) => {

  try{

    const result = await getResource();
    console.log('xxxx',result);

  } catch(err){
    console.log('Error',err);
  }

 }

 module.exports = listener;