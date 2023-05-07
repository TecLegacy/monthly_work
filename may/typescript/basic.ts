// Types

const canVote: number = 10;
/**
 * :boolean
 * :number :string
 * :RegExp
 * :string[] :number[]
 */

// HEADING: Array of String & Number
// With Generics
const userNames: Array<string> = ['john', 'max', 'steve'];
const age: number[] = [21, 30, 25];

// HEADING: Objects
/**
 * Interface is a type definition for creating an object type
 */
interface Pokemon {
  hp: number;
  name: string;
}

const pokemon: Pokemon = {
  hp: 30,
  name: 'bulbasaur',
};
/**
 * pokemon.skill="fire"
 * this will create error as skill doesnt exist on pokemon
 * to add a new property on object use MAP - (RECORD) utility
 */

// HEADING: MAPS - how to create a map in typescript
const placesToVisit: Record<string, number> = {
  india: 1,
};
placesToVisit.usa = 2; // Works
console.log(placesToVisit);

// Conditionals and loops works the same
// ALways let TS infer as much as possible
