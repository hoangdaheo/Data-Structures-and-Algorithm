const quickSort = (arr)=>{
    if(arr.length<2) return arr;
    const pivotIndex = arr.length -1 ;

    const pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    let current;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0 ; i<pivotIndex ;i++){
        current = arr[i];
        if(current < pivot){
            left.push(current);
        }else{
            right.push(current);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.time('quickSort');
console.log(quickSort([10,9,6,8,7,5]));
console.timeEnd('quickSort')