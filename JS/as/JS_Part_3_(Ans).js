//Q1

let n = 3;
let arr = [7,9,0,-2];
console.log(arr.slice(0,n));

//Q2

console.log(arr.slice(-n));

//Q3
pp =  prompt("enter an string")
if(pp){
    console.log("string is not empty");
} else console.log("string is empty");

//Q4
let string ="anany pandey"
let index = 0;

if(string[index]===string[index].toLowerCase()){
    console.log("given character index is lower case");
} else console.log("given character index is not lower case");

//Q5

let str = "   hel  lo   "
console.log(str.trim());

//Q6

if(arr.includes(1)){
console.log("element exists in an array");
} else console.log("element does not exists in an array");