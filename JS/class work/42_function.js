function printName(){
    console.log("apna collage");
    console.log("Ananya Pandey");
}

printName();
printName();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

print1to5();

function isAdult(){
    let age = 13;
    if(age>=18){
        console.log("adult");
    } else{
        console.log("not Adult");
    }
}

isAdult();

function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}

printPoem();

function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}


rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("shradha",23);
printInfo("rajat",19);  
printInfo("Ananya");

function sum(a,b){
    console.log(a+b);
}

sum(1,2);

function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(1,2,3);

function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

printTable(2);

function sum(a,b){
    return a+b;
}

// sum(1,2);
// console.log(sum(1,2));
// console.log(sum(sum(1,2),3));

function sum(a,b){
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello2");
    console.log("hello2");
}

console.log(sum(1,2));

function isAdult(age){
    if(age>=18){
        return "adult";
    } else{
        return "not adult";
    }
    console.log("bye bye");
}

function sum1ton(n){  
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

let arr = ["hello","hi","i","ananyapandey"];

function concat(arr){
    let con= "";
    for(let i=0;i<arr.length;i++){
        con += arr[i];
    }
    return con;
}

console.log(concat(arr));