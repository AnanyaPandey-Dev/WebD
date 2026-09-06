let nums = [1,2,3];
let finalVal = nums.reduce((res,el) => {
    console.log(res);
    return res / el;
},10);

console.log(finalVal);