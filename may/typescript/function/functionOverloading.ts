// Working with Coordinates

interface Coordinates {
  x: number;
  y: number;
}

/**
 * Step 1 - Define function signature
 * Step 2 - Create Implementation
 */

// Define function signature for object input
function parseCoordinate(obj: Coordinates): Coordinates;
// Coordinates from number x , y
function parseCoordinate(x: number, y: number): Coordinates;
function parseCoordinate(x: string): Coordinates;
// Implementation
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinates {
  let coord: Coordinates = {
    x: 0,
    y: 0,
  };
  // Type checking at runtime
  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinates),
    };
  } else if (typeof arg1 === 'string') {
    const [x, y] = arg1.split(',');
    let [coordX, valueX] = x.split(':');
    let [coordY, valueY] = y.split(':');
    coord = {
      x: +valueX,
      y: Number(valueY),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

console.log(parseCoordinate({ x: 20, y: 80 }));
console.log(parseCoordinate(100, 200));

// Challenge
console.log(parseCoordinate('x:70,y:7'));
