function oddOrEven(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }

        return even;
    } else{
        console.log("wrong request");
    }
}

let request = "odd";