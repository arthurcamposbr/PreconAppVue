<template>
  <base-template>
    <div class="form_login">
        <div class="sub font-14 fw-600 text-uppercase">Indicapê</div>
        <h1 class="h2 fw-700 mb-4">Acessar minha conta</h1>
        <form v-if="!loader" action="" v-on:submit.prevent="efetuaLogin">
            <div class="form-group">
                <input type="email" placeholder="E-mail" v-model="email" required>
            </div>
            <div class="form-group">
                <input type="password" placeholder="Senha" v-model="senha" required>
            </div>
            <div class="form-group font-14">
                <router-link to="recuperar-senha">Esqueci minha senha.</router-link>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success w-100 text-uppercase fw-600">Entrar</button>
            </div>
            <div class="login_social pt-2 mb-4 d-none">
                <div class="form-group"><button class="btn" type="button"><img src="@/assets/img/google.svg" class="mr-2" alt="Google"> Entrar com minha conta Google</button></div>
                <div class="form-group"><button class="btn" type="button"><img src="@/assets/img/facebook.svg" class="mr-2" alt="Facebook"> Entrar com minha conta Facebook</button></div>
            </div>
            <div class="cadastre_btn font-14"><p>Ainda não tem uma conta? <router-link to="cadastre-se">Cadastre-se agora</router-link></p></div>
            <div v-if="alerta" v-html="alerta"></div>
        </form>
        <loader v-if="loader" />
    </div>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Auth.vue"
export default {
    name: 'Login',
    components: {
        BaseTemplate
    },
    data() {
            return {
                email: '',
                senha: '',
                alerta: '',
                loader: false
            };
        },
        methods: {
            efetuaLogin(){
                this.loader = true;
                this.$http.post(this.$urlAPI + `/login`, {
                        email: this.email,
                        password: this.senha
                    })
                    .then(response => {
                        if(response.data.status == true){
                            sessionStorage.setItem('token',response.data.usuario.token);
                            this.$http.defaults.headers.common["Authorization"] = "Bearer " + response.data.usuario.token;
                            //this.$store.commit('setToken', response.data.usuario.token);
                            this.$store.commit('setUsuario', response.data.usuario);

                            this.$router.push('/');
                        }
                                          
                    })
                    .catch(error => {
                        this.loader = false;
                        this.alerta = '<div class="alert alert-danger font-14 mt-3" role="alert">'+ error.response.data.msg +'</div>';
                    })

        }
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