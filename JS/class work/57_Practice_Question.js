let sq = (n) => n*n;


function hello(){
    let id = setInterval( function () {
            console.log("Hello World");
        },2000);
    setTimeout(function () {
            clearInterval(id);
        },10000);
}