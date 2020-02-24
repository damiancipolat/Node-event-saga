const listener = (emitter) => (payload) => {
    console.log('listner3 executed.',payload);
 }

 module.exports = listener;