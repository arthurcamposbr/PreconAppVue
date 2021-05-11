<template>
  <div class="loader">
    <img src="@/assets/img/grid.svg" alt="Loader">
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .loader{
    display: table;
    margin: 30px auto;
    img{
      max-width: 35px;
    }
  }
</style>
