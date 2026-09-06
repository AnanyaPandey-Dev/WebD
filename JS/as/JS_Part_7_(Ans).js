
let arr = [2,5,6,4,3,2,5]

let arrayAverag = (arr) => {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(arrayAverag(arr));

let isEven = (n) => n%2==0;

console.log(isEven(6));
  
const object = {
    message:'Hello,World!',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);


let length = 4;

function callback(){
    console.log(this.length);
}

const object2={
    length:5,   
    method(callback){
        callback();
    },
};

object2.method(callback,1,2);