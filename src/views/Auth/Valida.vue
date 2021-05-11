<template>
  <base-template>
    <div class="form_login">
        <div class="sub font-14 fw-600 text-uppercase">Indicapê</div>
        <h1 class="h2 fw-700 mb-4">Ativar minha conta</h1>
        <div class="font-14">
            <p>Olá! Foi enviado para seu e-mail cadastrado o token para validação de conta. Acesse seu e-mail e insira o código logo abaixo.</p>
        </div>
        <loader v-if="loader" />
        <form v-if="!loader" action="" v-on:submit.prevent="validaConta">
            <div class="form-group">
                <input type="text" placeholder="Insira o código" required v-model="token">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success w-100 text-uppercase fw-600">Ativar minha conta</button>
            </div>
            
            <div class="cadastre_btn font-14"><p>Não recebeu o Token? <button type="button" class="btn btn-link px-0 py-0 font-14 fw-600">Enviar novamente</button></p></div>
        </form>
    </div>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Auth.vue"
export default {
    name: 'Valida',
    components: {
        BaseTemplate
    },
    data() {
            return {
                token: '',
                alerta: '',
                loader: false
            };
        },
    methods: {
            validaConta(){
                this.loader = true;
                this.$http.post(this.$urlAPI + `/valida-user`, {
                        token: this.token,
                    })
                    .then(response => {
                        if(response.data.status == true){
                            sessionStorage.setItem('token',response.data.user.token);
                            this.$http.defaults.headers.common["Authorization"] = "Bearer " + response.data.user.token;
                            //this.$store.commit('setToken', response.data.user.token);
                            this.$store.commit('setUsuario', response.data.user);

                            this.$router.push('/');
                        }
                                          
                    })
                    .catch(error => {
                        this.loader = false;
                        this.alerta = '<div class="alert alert-danger font-14 mt-3" role="alert">'+ error.response.data.msg +'</div>';
                    })

        }
        },
    created(){
            if(this.$route.query.cod){
                this.loader = true;
                this.$http.post(this.$urlAPI + `/valida-user`, {
                        token: this.$route.query.cod,
                    })
                    .then(response => {
                        if(response.data.status == true){
                            sessionStorage.setItem('token',response.data.usuario.token);
                            this.$http.defaults.headers.common["Authorization"] = "Bearer " + response.data.usuario.token;
                            //this.$store.commit('setToken', response.data.usuario.token);
                            this.$store.commit('setUsuario', response.data.usuario);

                            if(response.data.usuario.first_agenda == 1){
                                this.$store.commit("setStep", 'primeiro');
                            } else {
                                this.$store.commit("setStep", 1);
                            }

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