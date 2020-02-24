//Register event matrix bindings.
const registerAll = (emitter, bindings) => bindings.forEach(binding => binding.listeners.forEach(fn => emitter.on(binding.event,fn(emitter))));

module.exports = {
  registerAll
};