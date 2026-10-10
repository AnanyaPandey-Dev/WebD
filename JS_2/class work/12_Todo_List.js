let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

let a = function(){
    li = document.createElement("li");
    bu = document.createElement("button");
    ed = document.createElement("button");
    li.innerText = input.value + " ";
    bu.innerText = "Delete";
    bu.classList.add("del")
    ed.innerText = "Edit";
    ed.classList.add("edi")
    li.appendChild(ed);
    li.append(" ");
    li.appendChild(bu);
    ul.appendChild(li);
    input.value="";
}

btn.addEventListener("click",a)

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        if(event.target.className === "del"){
            let par = event.target.parentElement;
            par.remove();
        }
        else if(event.target.className === "edi"){
            let par = event.target.parentElement;
            console.log(par.innerText);
            let i = par.innerText
            let inp = document.createElement("input");
            inp.value = i.replace(" Edit Delete","")
            console.log(inp);
            par.firstChild.replaceWith(inp);
            event.target.nextElementSibling.remove();
            event.target.innerText = "Save"
            event.target.classList.remove("edi")
            event.target.classList.add("Save")
        }
        else if(event.target.className === "Save"){
            let del = document.createElement("button");
            del.innerText = "Delete";
            del.classList.add("del");
            let par = event.target.parentElement;
            par.appendChild(del);
            let b = event.target.previousElementSibling.value
            event.target.previousElementSibling.remove();
            par.prepend(b + " ");
            event.target.innerText = "Edit"
            event.target.classList.remove("Save")
            event.target.classList.add("edi")
        }
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