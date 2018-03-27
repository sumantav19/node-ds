var swap = require("./swap");
var quickSort = module.exports = function (arr, low, high) {
    if (arr.length == 0) {
        return arr;
    }
    low = low || 0;
    high = high || arr.length - 1;
    if (low < high) {
        pi = partition(arr, low, high)

         quickSort(arr, low, pi - 1);
         quickSort(arr, pi + 1, high);
    }
    return arr;
}
var partition = function (arr, low, high) {
    var pivot = arr[high];
    var i = low-1;
    for (var j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    //console.log(arr);
    return i + 1;
}