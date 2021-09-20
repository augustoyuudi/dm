import Http from './Http';

class GamesAPI extends Http {
  constructor() {
    super();
    this.pathname = '/version';
  }

  getByID(id) {
    return this.http.get(`${this.pathname}/${id}`);
  }

  getByName(name) {
    return this.http.get(`${this.pathname}/${name}`);
  }

  getRawURL(url) {
    return this.rawHttp.get(url);
  }

  async fetchAllGameData(gameName) {
    const { data: game } = await this.getByName(gameName);

    const {
      generation,
      pokedexes,
      regions,
    } = await this.fetchGameVersion(game?.version_group?.url);

    const pokedex = await this.fetchPokemonsByPokedex(pokedexes);

    return {
      name: game.name,
      names: game.names,
      generation,
      pokedexes,
      regions,
      pokedex,
    };
  }

  async fetchGameVersion(url) {
    const response = await this.getRawURL(url);
    return response.data;
  }

  async fetchPokemonsByPokedex(pokedexes) {
    const { url } = pokedexes[0];
    const { data } = await this.getRawURL(url);
    return data;
  }
}

export default new GamesAPI();
