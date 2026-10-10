let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

let a = function(){
    li = document.createElement("li");
    bu = document.createElement("button");
    li.innerText = input.value + " ";
    bu.innerText = "delete";
    li.appendChild(bu);
    ul.appendChild(li);
    input.value="";
}

btn.addEventListener("click",a)

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})

input.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        a();
}})




//Wrong way of doing
// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }