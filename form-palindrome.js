var letterCountMap = {};
"aadddmmdaammde".split("").forEach(function (letter) { typeof letterCountMap[letter] === "undefined" ? letterCountMap[letter] = 1 : letterCountMap[letter]++ })
var countOfOddLetterCount = 0;
for (var key in letterCountMap) {
    // check for multiple odd 
    if (letterCountMap[key] % 2 === 1) {
        countOfOddLetterCount ++;
    }
}

if(countOfOddLetterCount >1){
    console.log("Not a palindrome");
};