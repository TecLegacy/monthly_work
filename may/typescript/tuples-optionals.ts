// Tuples is an ds in which each values inside a tuple knows its type

type Coordinate = [x: number, y: number];

// Creating react UseState tuple in TS
function stateSetter(initial: string): [() => string, (v: string) => string] {
  let str: string = initial;
  return [() => str, (v: string) => (str = v)];
}

const [naam, SetName] = stateSetter('Tec');
console.log(naam());
SetName('Jake');
console.log(naam());

// HEADING: Optionals fields & Optional callbacks
interface User {
  id: number;
  info?: {
    email?: string;
  };
}

function callingMail(userInfo: User, callback?: (v: number) => number): void {
  console.log(userInfo?.info?.email ?? 'No Data found');

  // Calling optional callback
  console.log(callback?.(userInfo.id) ?? 'Enter ID :');
}

callingMail({ id: 10 });
callingMail(
  {
    id: 30,
    info: {
      email: 'tec@typescript.com',
    },
  },
  v => v + 100
);
