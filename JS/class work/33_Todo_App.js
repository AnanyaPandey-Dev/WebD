todo=[];

let req = prompt("enter a request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }else if(req=="add"){
        let task = prompt("enter task to add");
        todo.push(task);
        console.log("task added")
    }else if(req=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }else if(req=="delete"){
        let task = prompt("enter task index to delete");
        todo.splice(task,1);
        console.log("deleted task");
    }else{
        console.log("wrong request");
    }

    req = prompt("enter a request");
}