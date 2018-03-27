var swap = require("./swap")
var selectionSort = module.exports = function selectionSort(arr) {
    if(!arr){
        return;
    }
    for (var i = 0; i < arr.length; 
        i++) {  // n times
        // Multiple swap can happen on one iteration so for memory optimization can be done;
        // for (var j = i; j < arr.length; j++) {
        //     if (arr[i] > arr[j]) {
        //         arr = swap(arr, i, j);
        //     }
        // }
        // Single swap happens in one iteration
        let  minIndex = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;               
            }
        }
        if(minIndex != i)
            arr = swap(arr,minIndex,i);
    }
    return arr;
}

// time complexity of O(n*n)