<template>
  <main class="game view">
    <loader v-show='!game'></loader>
    <div v-show="game">
      <picture class="game__cover">
        <source srcset="@/assets/images/game-cover.jpeg">
        <img src="@/assets/images/game-cover.jpeg">
      </picture>
      <section v-if="game" class='game__details'>
        <div class="game__details__border">
          <div class="game__details__background">
            <p>Name: {{ game.name }} {{ game.names[0].name }}</p>
            <p>Generation: {{ game.generation.name }}</p>
            <p>Regions: {{ game.regions[0].name }}</p>
            <p>Pokedexes: {{ game.pokedexes[0].name }}</p>
            <details class="game__details__pokemons">
              <summary>Available pokémons</summary>
              <p
                v-for="pokemon in game.pokedex.pokemon_entries"
                :key='pokemon.entry_number'
              >
                {{ pokemon.pokemon_species.name }}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import GamesAPI from '@/services/http/Games';
import Loader from '@/components/shared/Loader.vue';

export default {
  name: 'Game',

  components: {
    Loader,
  },

  props: {
    gameName: {
      type: String,
    },
  },

  created() {
    this.fetchAllGameData();
  },

  data() {
    return {
      game: null,
    };
  },

  methods: {
    async fetchAllGameData() {
      try {
        this.game = await GamesAPI.fetchAllGameData(this.gameName);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
