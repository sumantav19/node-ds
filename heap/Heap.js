var HeapProto = function (capacity) {
    // console.log(Number.isInteger(capacity))
    if (!Number.isInteger(capacity)) {
        throw new Error("Capacity to be a number");
    }
    var heapCapacity = capacity,
        heapSize = -1,
        heapArr = new Array(capacity);
    var getParentIndex = function (i) { return Number.parseInt((i - 1) / 2) };
    var getLeftChildrenIndex = function (i) { return Number.parseInt(i * 2 + 1) };
    var getRightChildrenIndex = function (i) { return Number.parseInt(i * 2 + 2) };
    var swap = function (arr, key1, key2) {
        var tempKey = arr[key1];
        arr[key1] = arr[key2];
        arr[key2] = tempKey;
        return arr;
    }
    // @param key : heapify a sub tree from a given index
    // @param heapArr :
    // @param heapSize : current heap size
    // this method assumes that the subtrees are already heapified
    var minHeapify = function (key, heapArr, heapSize) {
        var left = getLeftChildrenIndex(key);
        var right = getRightChildrenIndex(key);
        var smallest = key;
        if (left <= heapSize && heapArr[key] > heapArr[left]) {
            smallest = left;
        }
        if (right <= heapSize && heapArr[key] > heapArr[right]) {
            smallest = right;
        }
        if (smallest != key) {
            heapArr = swap(heapArr, key, smallest);
            heapArr = minHeapify(smallest, heapArr, heapSize);
        }
        return heapArr;
    }
    return {
        getCapacity: function () {
            return heapCapacity;
        },
        getMini: function () {
            if (heapSize != -1)
                return heapArr[0];
            return undefined;
        },
        // 
        extractMini: function () {
            // store the minimum value
            var minValue = heapArr[0];
            // reduce heap size moving last index value to first index
            heapArr[0] = heapArr[heapSize--];
            // Require to reduce the size of heap. 
            heapArr = heapArr.splice(0, heapSize + 1);
            // heapify from index 0
            heapArr = minHeapify(0, heapArr, heapSize);
            return minValue;
        },
        //put the value at key and heapify
        decreaseKey: function (key, value) {
            heapArr[key] = value;
            var i = key;
            while (i > -1 && heapArr[getParentIndex(i)] > heapArr[i]) {
                heapArr = swap(heapArr, i, getParentIndex(i));
                i = getParentIndex(i);
            }
        },
        insert: function (value) {
            if (heapSize >= heapCapacity - 1) {
                return "Heap Full";
            }
            heapArr[++heapSize] = value;
            var i = heapSize;
            // Till it reaches the root element  && parent is larger than the children
            while (i != 0 && heapArr[getParentIndex(i)] > heapArr[i]) {
                heapArr = swap(heapArr, i, getParentIndex(i));
                i = getParentIndex(i);
            }
        },
        //put min value at key index, extract the minmum value
        delete: function (key) {
            this.decreaseKey(key, Number.MIN_SAFE_INTEGER);
            this.extractMini();
        },
        printHeapArr: function () {
            return (heapArr);
        }
    }
}
module.exports = Heap = function (capacity) {
    return Object.create(HeapProto(capacity));
}