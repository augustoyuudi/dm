<template>
  <div class="scroll-observer"></div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      observer: null,
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('isIntersecting');
      }
    }, this.options);

    this.observer.observe(this.$el);
  },

  destroyed() {
    this.observer.disconnect();
  },
};
</script>
