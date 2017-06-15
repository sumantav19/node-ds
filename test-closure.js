var test = [{ a: 4 }, { a: 5 }, { a: 10}];

var add100 = function add100(data, callback) {
    data += 100;
    setTimeout(function(){callback(data)},1000);
}

var totalSum = 0;

test.forEach(function (value) {
    add100(value.a,function getAddedValue(addedValue){
        totalSum += addedValue;
    })
}, this)

setTimeout(function(){console.log(totalSum)},5000);