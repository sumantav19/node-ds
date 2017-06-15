const insertionSort = module.exports = function insertionSort(arr) {
    var smallestKey, insertKey = -1;
    for (let i = 0; i < arr.length-1; i++) { //n-1 check for smallest
        let smallestKey = i;        
        for(let j = i+1 ; j < arr.length; j++){ // n-1!
            if( arr[j]< arr[smallestKey]){
                smallestKey = j; // worse case memory utilization n-1
            }
        }        
        if ( smallestKey != i ) {
            let temp = arr[smallestKey]; // n-1 times smallest
            for ( let k = smallestKey ; k > i; k--) {
                arr[k] = arr[ k-1 ];                
            }
            arr[i]= temp;            
        }
    }
    return arr;
}

// time complexit O(n*n)

// What is Binary Insertion Sort?
// We can use binary search to reduce the number of comparisons in 
// normal insertion sort. Binary Insertion Sort find use binary search 
// to find the proper location to insert the selected item at each 
// iteration. In normal insertion, sort it takes O(i) (at ith iteration)
//  in worst case. we can reduce it to O(logi) by using binary search.
//   The algorithm as a whole still has a running worst case running 
//   time of O(n2) because of the series of swaps required for each 
//   insertion. Refer this for implementation