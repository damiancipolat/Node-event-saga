const listener = (emitter) => (payload) => {
    console.log('listner4 executed.',payload);
 }

 module.exports = listener;