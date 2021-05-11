<template>
  <div class="bread">
      <div class="container">
          <router-link to="/">Home</router-link> / <span>{{nome}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        nome: ''
    }
}
</script>

<style lang="scss" scoped>
.bread{
    background-color: $cinza;
    color: $cinza2;
    font-size: 15px;
    padding: 15px 0;
    margin-bottom: 45px;
}
</style>