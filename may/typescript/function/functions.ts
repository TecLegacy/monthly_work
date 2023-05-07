// Typed Functions

// HEADING: Arrow functions
const addingValues = (para1: number, para2: number): number => {
  return para1 + para2;
};
console.log(addingValues(10, 20));

// HEADING: function declarations
function userName(first: string, last: string): string {
  return `Your Name is ${first} ${last}`;
}
console.log(userName('tec', 'legacy'));

/**
 * Default parameter is same as JS
 * After ending of function parenthesis colon value is its return type
 * ():returnType
 * -> can return anything as functions are values,
 * string, number[] , boolean etc
 */

// VOID type , unknown , any , default parameter , restparameter
function somethingBlock(
  para: unknown,
  para2: string = '',
  para3?: any,
  ...rest: string[]
): void {
  console.log(`something to work with - ${para} does it${para2} - ${para3}
  remaining rest values ${rest}
  `);
}

// HEADING: UNION types
// if anyone of both type exist it should work
let address: string | number;
address = 'Main Road BT';
address = 31;

// TYPESCRIPT enforces type at runtime
// to compile ts file to js use tsc filename.ts
// to run ts file - use either npx ts-node filename.js or .ts
// or regular node filename.js

// HEADING: Imports and exports
/**
 * Typescript uses Target as esnext - to make imports works
 * import default , {named} from "filename"
 * export default filename or named export
 *
 * to initialize ts config file use
 * npx tsc --init
 */
