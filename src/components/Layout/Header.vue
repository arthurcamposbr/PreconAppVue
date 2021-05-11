<template>
  <header id="header">
      <div class="container">
          <div class="row align-items-center justify-content-between">
              <div class="col-md-auto col-6">
                  <router-link to="/" class="logo"><img src="@/assets/img/logo.png" alt="Precon"></router-link>
              </div>
              <div class="col-md-auto d-lg-block d-none">
                  <b-nav class="justify-content-center">
                      <b-nav-item to="/">Home</b-nav-item>
                      <b-nav-item to="/empreendimentos">Empreendimentos</b-nav-item>
                      <b-nav-item to="/minhas-indicacoes">Minhas Indicações</b-nav-item>
                      <b-nav-item to="/minha-carteira">Minha Carteira</b-nav-item>
                      <b-nav-item to="/minha-conta">Minha Conta</b-nav-item>
                  </b-nav>
              </div>
              <div class="col-md-auto d-md-block d-none">
                  <div v-if="this.$store.getters.getUsuario" class="user">
                      <div class="foto" v-bind:style="[this.$store.getters.getUsuario.perfil ? { backgroundImage: 'url(' + this.$store.getters.getUsuario.perfil + ')' } : '']"></div>
                      <div class="infos">
                          <b-dropdown id="dropdown-1" class="nome" :text="'Olá, '+this.$func.primeiroNome(this.$store.getters.getUsuario.name)">
                            <b-dropdown-item @click="sair">Sair</b-dropdown-item>
                        </b-dropdown>
                          <div class="saldo"><small>Saldo:</small> <span class="fw-600 text-primary opensans">R$ 0,00</span></div>
                      </div>
                  </div>
              </div>
              <div class="col-md-auto col-6 d-lg-none text-right">
                  <button class="menu">
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
    sair() {
      sessionStorage.clear();
      this.$store.commit("setToken", "");
      this.$store.commit("setUsuario", "");
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
    header#header{
       padding: 15px 0;
       border-bottom: solid 1px $cinza;
       .nav{
           .nav-item{
               .nav-link{
                   font-size: 15px;
                   color: $secondary;
                   font-weight: 500;
                   transition: all .25s ease;
                   &:hover{
                       color: $primary;
                   }
                   &.router-link-exact-active{
                       color: $primary;
                   }
               }
           }
       }
       .user{
           display: flex;
           flex-wrap: wrap;
           font-size: 14px;
           line-height: 1.3;
           align-items: center;
           .foto{
               width: 55px;
               height: 55px;
               background-color: $secondary;
               border-radius: 50%;
               background-size: cover;
               background-position: center;
           }
           .infos{
               padding-left: 10px;
               .dropdown-toggle{
                   background-color: transparent;
                   color: $secondary;
                   padding: 0;
                   border: 0;
               }
           }
       }
    }
</style>