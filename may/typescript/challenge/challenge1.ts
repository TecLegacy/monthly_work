import houses from '../json/houses';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

// houses with string
function findHouses(houses: string | House[]): HouseWithID[];

// houses string with filter callback (boolean)
function findHouses(
  houses: string | House[],
  filter: (house: House) => boolean
): HouseWithID[];

// Implementation
function findHouses(arg1: unknown, arg2?: unknown): HouseWithID[] {
  let houseWithId: HouseWithID[] = [
    {
      name: '',
      planets: '',
      id: 0,
    },
  ];

  if (typeof arg1 === 'string') {
    const houses = JSON.parse(arg1);
    houseWithId = houses.map((c: object, i: number) => {
      return {
        ...c,
        id: i,
      };
    });
  } else {
    // const houses = JSON.parse(arg1);
    houseWithId = houses.map((c: object, i: number) => {
      return {
        ...c,
        id: i,
      };
    });
  }

  return houseWithId;
}

console.log(findHouses(JSON.stringify(houses)));

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
);

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
