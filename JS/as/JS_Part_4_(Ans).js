
//Ans1
let arr=[1,2,3,4,5,6,2,3];
let num=2;
let a = arr.indexOf(num);
while(a != -1){
    arr.splice(a,1);
    a = arr.indexOf(num);
}
console.log(arr);

//Ans2
let number = 287152;
let count = 0;
while(number > 0){
    count++;
    number = Math.floor(number/10);
}
console.log(count);

//Ans3
let number2 = 287152;
let sum = 0;
while(number2 > 0){
    sum += number2%10;
    number2 = Math.floor(number2/10);
}
console.log(sum);

//Ans4
let n= 7;
let fact = 1
if(n===0) console.log(1)
while(n > 0){
    fact = fact * n;
    n--;
}
console.log(fact);

//Ans5
let m= [2,5,10,4,2,7,1,9];;
let large = m[0];
for(let i=1;i<m.length;i++){
    if(large<m[i]){
        large = m[i];
    }
}
console.log(large);
