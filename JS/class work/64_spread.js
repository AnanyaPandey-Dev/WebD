// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...even,...odd];

const data = {
    email: "iron",
    password: "abcd"
};

const datacopy = {...data, id: 1234, country : "India"};

let arr = [1,2,3,4,5];
let obj1 = {...arr}; //obj -> key:val

let obj2 = {..."hello"};