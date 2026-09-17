console.log('1. Start');
process.nextTick(()=>console.log('2. nextTick'));
setTimeout(()=>console.log('3. settimeout'),0);
setImmediate(()=>console.log('4. setImmediate'));
console.log('5. End');

console.log("1.Event Started");
process.nextTick(() => {
    console.log("2. nextTick");
});
console.log("3. Event Ended");
setTimeout(() => {
    console.log("4. setTimeout");
}, 2000);{  
console.log("5. Set 3000 ")}                                                                                    ;