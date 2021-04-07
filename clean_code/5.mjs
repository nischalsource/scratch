
const foo = ['0', '1'];

// WRONG
// let a = foo[0], b = foo[1];

// CORRECT
let [a, b] = foo;

export {a,b};
