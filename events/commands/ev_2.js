const listener = (emitter) => (payload) => {
    console.log('listner2 executed.',payload);
 }

 module.exports = listener;