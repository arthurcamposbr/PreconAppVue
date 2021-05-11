<template>
  <section class="auth">
      <div class="cont">
          <div class="body_auth">
              <div class="header">
                  <div class="row align-items-center">
                      <div class="col-6">
                          <a href="https://indicape.meuprecon.com.br/" class="logo"><img src="@/assets/img/logo.png" alt="Precon"></a>
                      </div>
                      <div class="col-6 text-right">
                          <a href="https://indicape.meuprecon.com.br/" class="btn btn_voltar">Voltar</a>
                      </div>
                  </div>
              </div>
              <transition appear name="slide" mode="out-in">
                <slot />
            </transition>
              <div class="footer font-14">
                  <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e <a href="#" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
              </div>
          </div>
      </div>
      <div class="slider">
          <div class="slide"></div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.auth{
    display: flex;
    .cont{
        min-height: 100vh;
        width: 100%;
        max-width: 690px;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        .body_auth{
            width: 100%;
            max-width: 425px;
            .header{
                padding-bottom: 10vh;
                .btn_voltar{
                    border: solid 1px $cinza;
                    color: $primary;
                    &:hover{
                        background-color: $cinza;
                    }
                }
            }
            .footer{
                padding-top: 10vh;
                color:$cinza2;
                a{
                    color: $cinza2;
                    text-decoration: underline!important;
                    &:hover{
                        color: $primary;
                    }
                }
            }
        }
    }
    .slider{
        flex: 1;
        .slide{
            height: 100%;
            background-color: $secondary;
        }
    }
}

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