// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });

let arr = [
    {
        name: "aman",
        marks: 95
    },
    {
        name: "shradha",
        marks: 94.4
    },
    {
        name: "rajat",
        marks: 95
    },
];

console.log(arr);

arr.forEach((student) => {
    console.log(student.marks);
});