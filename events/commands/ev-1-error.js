const listener = (emitter) => (payload) => {
  console.log('listner1 err.',payload);
}

module.exports = listener;