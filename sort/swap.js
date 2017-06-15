var swap = module.exports =function swap(arr, key1, key2) {
    var tempKey = arr[key1];
    arr[key1] = arr[key2];
    arr[key2] = tempKey;
    return arr;
}