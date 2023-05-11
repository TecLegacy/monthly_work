// Ranker algo for sorting pokemon

interface Pokemon {
  name: string;
  hp: number;
}

// list of pokemons
const pokemonList: Pokemon[] = [
  {
    name: 'bubasaa',
    hp: 50,
  },
  {
    name: 'charizard',
    hp: 100,
  },
  {
    name: 'pikachu',
    hp: 20,
  },
];

interface UpdatedRanks<Ranker> {
  c: Ranker;
  rank: number;
}
function ranker<Ranker>(item: Ranker[], rank: (v: Ranker) => number): Ranker[] {
  const updatedRanks: UpdatedRanks<Ranker>[] = item.map(c => ({
    c,
    rank: rank(c),
  }));

  const sort = updatedRanks.sort((a, b) => a.rank - b.rank);
  console.log(sort);

  return sort.map(c => c.c);
}
console.log(ranker(pokemonList, ({ hp }) => hp));
