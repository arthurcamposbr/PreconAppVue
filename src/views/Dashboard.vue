<template>
  <main>
      <header-dash></header-dash>
      <div class="main">
        <transition appear name="slide" mode="out-in">
            <slot />
        </transition>
      </div>
      <footer-dash></footer-dash>
  </main>
</template>

<script>
import TransitionPage from '@/transitions/TransitionPage.vue'
import HeaderDash from '@/components/Layout/Header.vue'
import FooterDash from '@/components/Layout/Footer.vue'
export default {
    name: 'Dashboard',
    components: {
        TransitionPage,
        HeaderDash,
        FooterDash
    }
}
</script>

<style lang="scss" scoped>
@keyframes slide {
    from {
        transform: translate3d(-40px, 0, 0);
    }

    to {
        transform: translate3d(0px, 0, 0);
    }
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-to {
    transition: opacity 0.3s;
}

.slide-enter-to {
    animation: slide 0.3s;
}

.slide-leave-to {
    animation: slide 0.3s reverse;
}
</style>