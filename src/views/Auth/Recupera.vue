<template>
  <base-template>
    <div class="form_login">
        <div class="sub font-14 fw-600 text-uppercase">Indicapê</div>
        <h1 class="h2 fw-700 mb-4">Esqueci minha senha</h1>
        <div class="font-14">
            <p>Insira seu e-mail de cadastro para receber um e-mail com as instruções de recuperação.</p>
        </div>
        <form action="">
            <div class="form-group">
                <input type="email" placeholder="E-mail" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success w-100 text-uppercase fw-600">Entrar</button>
            </div>
            
            <div class="cadastre_btn font-14"><p>Ainda não tem uma conta? <router-link to="cadastre-se">Cadastre-se agora</router-link></p></div>
        </form>
    </div>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Auth.vue"
export default {
    name: 'Recuperar',
    components: {
        BaseTemplate
    }
}
</script>

<style lang="scss" scoped>
    .form_login{
        .sub{
            color: $cinza2;
        }
        .form-group{
            input{
                width: 100%;
                height: 50px;
                padding: 0 15px;
                font-size: 14px;
                border: solid 1px $cinza;
                outline-color: rgba($secondary, .2);
                &::placeholder{
                    color: #B5B5B5;
                }
            }
            button{
                height: 50px;
                border-radius: 0;
                letter-spacing: 1px;
                width: 100%;
            }
        }
        .login_social{
            .form-group{
                button{
                    border: solid 1px $cinza;
                    color: $cinza2;
                    background-color: white;
                    font-size: 15px;
                    font-weight: 500;
                    outline: none!important;
                    &:hover{
                        background-color: $cinza;
                    }
                }
            }
        }
        a{
            color: $cinza2;
            &:hover{
                color: $primary;
            }
        }
        .cadastre_btn{
            a{
                color: $primary;
                font-weight: 500;
            }
        }
    }
</style>