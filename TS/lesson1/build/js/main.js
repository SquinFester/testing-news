"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
console.log(updateAssignment({
    studentId: "a",
    title: "a",
    grade: 20,
}, { grade: 10 }));
const a = (b, c) => {
    return b[c];
};
console.log(a({
    studentId: "a",
    title: "a",
    grade: 20,
}, "grade"));
const recordAssignment = (assign) => {
    return assign;
};
console.log(recordAssignment({
    studentId: "a",
    title: "a",
    grade: 20,
    verified: false,
}));
const b = {
    grade: 20,
    studentId: "a",
};
