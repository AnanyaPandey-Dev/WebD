let imp = document.querySelector("#text");
let p = document.querySelector("p");

imp.addEventListener("input", function(){
    console.log(imp.value);
    p.innerText = imp.value;
});