var swap = require("./swap")
var bubbleSort = module.exports = function bubbleSort(arr) {
     if(!arr){
        return;
    }
    for(var  i = 0 ; i < arr.length - 1 ; i++){
        for (var j = 0 ;  j < arr.length -i -1; j++ ){
            if(arr[j] > arr[j+1]){
                arr = swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

// time complexity of O(n*n)