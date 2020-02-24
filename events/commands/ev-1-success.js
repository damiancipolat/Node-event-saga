const listener = (emitter) => (payload) => {
  console.log('listner1 ok.',payload);
}

module.exports = listener;