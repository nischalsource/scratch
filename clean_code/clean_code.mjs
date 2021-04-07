console.log('BEGIN');

/*
*/

console.log("\n1. Assigning a value to the same thing conditionally using ternary operators.");
import foo1 from './1.mjs'
console.log(foo1);

/*
*/

console.log("\n2. Assigning the same value to a specific object property conditionally.");
var c2,d2,a2={};
//WRONG c > d ? a.foo = 'apple' : a.bar = 'apple';
a2 = { [c2 > d2 ? 'foo' : 'bar']: 'apple' };
console.log(a2);
/*
*/

console.log("\n3. Exporting multiple variables ");
import * as foo3 from './3.mjs';

console.log(foo3);

/*
*/

console.log("\n4. Declaring and assigning variables from object properties.");
import test from './4.mjs';
console.log(test());

/*
*/

console.log(' \n5. Declaring and assigning variables from array indexes. ');
import {a as a5, b as b5} from './5.mjs';
console.log(a5, b5);

/*
 */

console.log('\n6. Array Assignment with return value from function.');
const funcexample = function(a){return a +'_funcValue';}

/*
const a6 = funcexample('a6'), b6 = funcexample('b6'),
c6 = funcexample('c6'), d6 = funcexample('d6');
*/

let elements = {};
['a6', 'b6', 'c6', 'd6'].forEach(item => elements = { 
  ...elements, 
  [item]: funcexample(item) 
});
const { a6, b6, c6, d6 } = elements;

console.log(elements, a6, b6, c6, d6);


/*
*/

console.log('\n 7. Use logical operators for simple conditionals. ');

/*
WRONG
if (foo) {
  doSomething();
}
*/

const foo7 = true, doSomething = (a) => {return a};

foo7 && console.log(doSomething('hello'));

/*
*/

console.log('\n 8. Passing parameters conditionally.');

/*
WRONG
if(!foo){
  foo = 'apple';
}
bar(foo, kip);
*/
const foo = true, kip = true;
const bar = (a, b) => {return [a,b]}

console.log(bar(foo || 'apple', kip));

/*
 */

console.log('\n  9. Dealing with lots of 0`s. ');

/*
WRONG
const SALARY = 150000000,
TAX = 15000000;
*/


const SALARY = 15e7,
TAX = 15e6;

console.log({SALARY, TAX});

/*
*/

console.log('\n  10. Assigning the same thing to multiple variables.'); 

/*
WRONG
a = d;
b = d;
c = d;
*/

let a10, b10, c10, d10 = true;

a10 = b10 = c10 = d10;
console.log({a10,b10,c10,d10});



console.log('\n  11. Create an object with no prototype - plain object'); 
function a11(){}
let x = {}; //with prototype
let y = Object.create(Object.prototype); //with prototype
let z = Object.create(null); //withOut prototype ie: .toString, hasOwnProperty etc

console.log(Reflect.ownKeys(a11));
console.log(Reflect.getPrototypeOf(a11));
console.log(Reflect.ownKeys(y));
console.log(Reflect.ownKeys(z));

/*
*/


console.log('');



console.log('\nEND');
