<template>
  <div class='base-card'>
    <picture
      class="base-card__image-container"
    >
      <source
        srcset='@/assets/images/game-cover.jpeg'
      >
      <img
        class="base-card__image"
        src='@/assets/images/game-cover.jpeg'
        :alt='`Cover of pokemon game called ${game.name}`'
      >
    </picture>
    <aside class="base-card__content">
      <h4 class="base-card__title">Pokémon <br>{{ capitalizedGameName }}</h4>
      <h5 class="base-card__subtitle">#{{ game.id }}</h5>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
    },
  },

  computed: {
    capitalizedGameName() {
      if (!this.game) {
        return '';
      }

      const firstLetter = this.game.name.charAt(0).toUpperCase();

      return `${firstLetter}${this.game.name.slice(1)}`;
    },
  },
};
</script>
