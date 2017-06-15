var swap = require("./swap")
var recursiveBubbleSort = module.exports = function recursiveBubbleSort(arr,n) {
    if(!arr)
        return;
    if(arr.length == 0)
        return arr;
    if(!Array.isArray(arr))
        throw new Error("not an array");
    if(!n){
        n = arr.length;
    }else if( n==1 ){
        return arr;
    }
    for(var j = 0 ; j < n-1 ; j++){
        if(arr[j] > arr[j+1]){
            arr = swap(arr,j,j+1);
        }
    }   
    return recursiveBubbleSort(arr,n-1);
}