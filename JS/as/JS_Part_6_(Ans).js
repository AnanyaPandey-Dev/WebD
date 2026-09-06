//Ans1

let n = 5;
arr = [1,8,4,9,2,4,5,2,9];

function printLargerElements(arr,n){
    console.log(`Elements larger than ${n}`);
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}

printLargerElements(arr,n);


//Ans2
let str = "abcdabcdefgggh";
function printUniqueString(str){
    let ans = "";
    for(let i=0;i<str.length;i++){
        if(ans.indexOf(str[i])===-1){
           ans += str[i];
        }
    }

    console.log(ans);
}


printUniqueString(str);


//Ans3
let country = ["Australia", "Germany", "United States of America"]
function longestCountryName(country){
    let len = country[0];
    for(let i=1;i<country.length;i++){
        if(len.length<country[i].length){
           len = country[i];
        }
    }

    return len;
}

console.log(longestCountryName(country));


//Ans4
let s = "ananya pandey";
function countvowels(s){
    let c = 0;
    for(let i=0;i<s.length;i++){
        if("AEIOU".includes(s[i].toUpperCase())){
           c++;
        }
    }

    console.log(c);
}

countvowels(s);


//Ans5
function genRandomNum(l,h){
    let diff = h-l+1;
    let random = Math.floor(Math.random()*diff)+l;
    console.log(random);
}

genRandomNum(100,105);