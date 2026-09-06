// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i< smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// console.dir(document.querySelectorAll("p"));


// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "purple";
// }

// for(let i=0;i<links.length;i++){
//     links[i].style.color = "green";
// } 


let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.classList.add("red");
body.prepend(p);
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
body.prepend(h3);


let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
let p1 = document.createElement("p");
p1.innerText = "ME TOO!";
let container = document.createElement("div");
container.classList.add("container");
container.appendChild(h1);
container.appendChild(p1);
body.prepend(container);