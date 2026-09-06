const student = {
    name: "aman",
    marks: 95,
    prop: this, // global scope
    getName: function () {
        console.log(this); // calling object scope that of student
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent scope that of window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        },2000);
    },
    getInfo2: function () {
        setTimeout( function () {
            console.log(this);
        },2000);
    },
}  