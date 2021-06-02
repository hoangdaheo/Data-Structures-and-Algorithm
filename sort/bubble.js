const array = [10,9,6,8,7,5];
// const swap = (a,b) => {

// }

//! unoptimized
console.time('bubble');
for (let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
        if (array[j]<array[i]){
            let temp = 0;
            //? swap
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);
console.timeEnd('bubble');
//! optimized
console.time('bubble');
for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length -i; j++){
        if (array[j]>array[j+1]){
            let temp = 0;
            //? swap
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array);
console.timeEnd('bubble');