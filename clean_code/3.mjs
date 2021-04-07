/*
WRONG
export const foo;
export const bar;
export const kip;

CORRECT
export const foo, bar, kip;
*/
const foo = true;
const bar = true;
const kip = true;

export {foo, bar, kip};