
export default function test(){

var foo={x: 'x',y: 'y' };

// WRONG 
// a = foo.x, b = foo.y;

// CORRECT
const{ ['x']: a, ['y']: b } = foo;


return {a,b};
};