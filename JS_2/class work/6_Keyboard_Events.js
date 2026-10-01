// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("dblbutton clicked");
// })

// let imp = document.querySelector("input");

// imp.addEventListener
// ("keydown",function(){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// })

// imp.addEventListener
// ("keyup",function(){
//     console.log("key was released");
// })

// imp.querySelector("keydown",function(){
//     console.log("key was pressed");
// })


let imp = document.querySelector("input");
let box = document.querySelector(".box");

console.dir(box.style)

imp.addEventListener
("keydown",function(event){
    console.log(event.code);
    if(event.code == "ArrowUp"|| event.code == "KeyW"){
        box.style.marginTop = parseInt(box.style.marginTop) + -5 + "px";;
    }else if(event.code == "ArrowDown"|| event.code == "KeyS"){
        box.style.marginTop = parseInt(box.style.marginTop) + 5 + "px";;
    }else if(event.code == "ArrowRight"|| event.code == "KeyD"){
        box.style.marginLeft = parseInt(box.style.marginLeft) + 5 + "px";;
    }else if(event.code == "ArrowLeft"|| event.code == "KeyA"){
        box.style.marginLeft = parseInt(box.style.marginLeft) + -5 + "px";;
    }
})