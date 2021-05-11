<template>
  <div id="app">
      <transition-page>
        <router-view/>
      </transition-page>
  </div>
</template>
<script>
import TransitionPage from './transitions/TransitionPage.vue';
export default {
  name: 'App',
  components: {
    TransitionPage,
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.$store.commit('setIsMobile', window.innerWidth < 600);
      this.$store.commit('setIsWindowHeight', window.innerHeight);
    }
  },
  created(){
  }
};
</script>
<style lang="scss">

</style>
