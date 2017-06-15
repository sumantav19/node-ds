const mergeSort = module.exports = function (arr) {    
    if(arr.length <= 1){
        return arr;
    }    
    var arrLeft = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    var arrRight = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
    var mainArr = [], leftArrIndex = 0, rightArrIndex = 0;

    while (leftArrIndex < arrLeft.length && rightArrIndex < arrRight.length) {
        
        if (arrLeft[leftArrIndex] <= arrRight[rightArrIndex]) {
            mainArr.push(arrLeft[leftArrIndex]);            
            leftArrIndex++;
        } else if (arrLeft[leftArrIndex] > arrRight[rightArrIndex]) {
            mainArr.push(arrRight[rightArrIndex]);            
            rightArrIndex++;
        } 
             
    }
   
    if (leftArrIndex < arrLeft.length) {        
        while (leftArrIndex < arrLeft.length) {            
            mainArr.push(arrLeft[leftArrIndex]);            
            leftArrIndex++;
        }
    }
    if (rightArrIndex < arrRight.length) {
        while (rightArrIndex < arrRight.length) {
            mainArr.push(arrRight[rightArrIndex]);
            rightArrIndex++;
        }
    }
    return mainArr;
}