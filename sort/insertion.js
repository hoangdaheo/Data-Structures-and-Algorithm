const a = [3,2,10,5,8,4,7];
for (let i = 1; i < a.length; i++){
    let current = a[i];
    let j = i-1;
    while((j>-1) && (current<a[j])){
        a[j+1]= a[j];
        j--;
    }
    a[j+1]= current;
}
console.log(a);