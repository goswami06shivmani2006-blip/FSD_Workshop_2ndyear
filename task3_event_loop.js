console.log("1. Synchronous code: Program started.");

// process.nextTick()
process.nextTick(() => {
    console.log("3. process.nextTick() executed.");
});

// setTimeout()
setTimeout(() => {
    console.log("4. setTimeout() executed.");
}, 0);

// setImmediate()
setImmediate(() => {
    console.log("5. setImmediate() executed.");
});

console.log("2. Synchronous code: Callbacks scheduled.");