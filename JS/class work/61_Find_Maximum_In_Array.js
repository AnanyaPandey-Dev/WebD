let arr = [1,4,2,5,6,7,2,11];

let max = arr.reduce((max,el) => {
    if(max<el){
        return el;
    } else{
        return max;
    }
});

console.log(max);