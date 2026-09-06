function sum(...args){
    for(let i=0 ; i< args.length;i++){
        console.log("you gave us: ",args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
}


function sum(...args){
    return args.reduce((sum,el) => sum+el);
}


function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=> {
        if(min > el){
            return el;
        } else {
            return min;
        }
    });
}

let names = ["tony","bruce","peter","steve","abc"];

let [winner,runnerup,...others] = names;

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","english","math","science"],
    username: "karan@123",
    password: "abcd",
    city: "Delhi"
};

let {username: user,password: secret,city: place = "Mumbai"} = student;