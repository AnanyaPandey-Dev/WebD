let arr = [10,20,30,45];

let t = arr.every((el) => el%10==0);

console.log(t);



function getMin(a){
    let b = a.reduce((rel,el) => {
        if(rel<el){
            return rel;
        } else{
            return el;
        }
    });

    return b;
}
let a =[-10,-80,-40,-100];


console.log(getMin(a));
console.log(getMin([1,2,3,4]));
console.log(getMin([1,2,3,4,-1]));
console.log(getMin([1,2,3,4,-1,-45]));
