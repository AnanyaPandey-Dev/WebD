//q1

let num =95;

if(num%10==0){
    console.log("good");
} else console.log("bad");

//q2

// let name = prompt("enter name");
// let age = prompt("enter age");
// console.log(`${name} is ${age} years old.`);

//q3

let quarter =5;

switch(quarter){
    case 1:
        console.log("january","February","March");
        break;
    case 2:
        console.log("April","May","June");
        break;
    case 3:
        console.log("July","August","September");
        break;
    case 4:
        console.log("October","November","December");
        break;
    default:
        console.log("wrong quarter entered");
}

//q5

let str = "An";

if((str[0]==='A'||str[0]==='a')&&str.length>5) console.log("golden");
else console.log("not");

//q6


let n1 = 10;
let n2 = 10;
let n3 = 1;

if(n1>=n2&&n1>=n3) console.log(n1);
else if(n2>=n1&&n2>=n3) console.log(n2);
else console.log(n3);

//q7

n1 = 32;
n2 = 47852;

if(n1%10===n2%10) console.log("Yes");
else console.log("No");

