import Http from './Http';

class PokemonsAPI extends Http {
  constructor() {
    super();

    this.pathname = '/pokemons';
  }
}

export default new PokemonsAPI();
