process.nextTick(() => console.log("Process next tick..."));
Promise.resolve("Promise resolved.").then(console.log);
setImmediate(() => console.log("Immediate callback."));
setTimeout(() => {
  console.log("Timer console.");
}, 0);
