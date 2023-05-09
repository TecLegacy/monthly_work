import houses from '../json/houses';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

// houses with string
function findHouses(houses: string): HouseWithID[];

// houses string with filter callback (boolean)
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];

// houses []
function findHouses(houses: House[]): HouseWithID[];

// Houses []  with filter callback (boolean)
function findHouses(
  houses: House[],
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

  if(arg2 && typeof arg1 === 'string'  ){
    const houses = JSON.parse(arg1);
    houseWithId = houses.map((c: object, i: number) => {
      return {
        ...c,
        id: i,
      };
    });

    console.log(houseWithId.filter(arg2))
  }else if(){

  }

//   if (typeof arg1 === 'string') {
//     const houses = JSON.parse(arg1);
//     houseWithId = houses.map((c: object, i: number) => {
//       return {
//         ...c,
//         id: i,
//       };
//     });
//   }

    return houseWithId;
}

console.log(findHouses(JSON.stringify(houses)));

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
);

// console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
