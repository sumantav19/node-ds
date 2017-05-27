var HeapProto = function (capacity) {
    // console.log(Number.isInteger(capacity))
    if (!Number.isInteger(capacity)) {
        throw new Error("Capacity to be a number");
    }
    var heapCapacity = capacity,
        heapSize = -1,
        heapArr = new Array(capacity);
    var getParent = function (i) { return (i - 1) / 2 };
    var getLeftChildren = function (i) { return i * 2 + 1 };
    var getRightChildren = function (i) { return i * 2 + 2 };
    var swap = function(arr,key1,key2){
        var tempKey = arr[key1];
        arr[key1] = arr[key2];
        arr[key2] = tempKey;
        //return arr.splice(); // returns a new array
        return arr;
    }
    return {        
        getCapacity : function(){
            return heapCapacity;
        },
        getMini : function(){
            if(heapSize != -1)
                return heapArr[0];
            return undefined;
        },
        extractMini : function(){

        },
        decreaseKey : function(){

        },
        insert : function(key){
            if( heapSize >= heapCapacity){
                console.log("Heap Full");
                return;
            }
            heapArr[++heapSize] = key;
            var i = heapSize;            
            // Till it reaches the root element  && parent is larger than the children
            while( i != 0 && heapArr[ getParent (i) ] > heapArr [i] ){
                console.log("came In");
               heapArr = swap(heapArr,i,getParent(i));
               i = getParent(i);
            }
        },
        delete : function(){

        },
        printHeapArr : function(){
            console.log(heapArr.join(","));
        }
    }

}


module.exports = Heap = function (capacity) {    
    return Object.create(HeapProto(capacity));
}

