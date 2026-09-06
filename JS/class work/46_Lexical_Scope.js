// function outerFunc(){
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     let x = 5;
//     let y = 6;
//     innerFunc()
// }

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        let a = 10;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerFunc();
}