const fs = require("fs");
var p = 0;
console.log(++p, " Start");
function testCallbackEventLoop(callback) { 
    console.log(++p," inside testCallbackFunction");
    callback(); 
}

testCallbackEventLoop(function(){
    console.log(++p," callBack");
})
setTimeout(function () {
    console.log(++p, " First timeout");
}, 1000);

setImmediate(function () {
    console.log(++p, " Immediate");
});

setTimeout(function () {
    console.log(++p, " second timeout");
}, 0);



process.nextTick(function () {
    console.log(++p, " Tick");
})
process.nextTick(function () {
    console.log(++p, " Tick");
})

fs.stat(__filename, function () {
    console.log(++p, " stat");
})
console.log(++p, " end");