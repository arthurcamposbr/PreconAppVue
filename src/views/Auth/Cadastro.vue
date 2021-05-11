<template>
  <base-template>
    <div class="form_login">
        <div class="sub font-14 fw-600 text-uppercase">Indicapê</div>
        <h1 class="h2 fw-700 mb-4">Criar minha conta</h1>
        <form v-if="!loader" action="" v-on:submit.prevent="cadastro">
            <div class="form-group">
                <input type="text" placeholder="Nome completo" v-model="nome" required>
            </div>
            <div class="form-group">
                <input type="email" placeholder="E-mail" v-model="email" required>
            </div>
            <div class="form-group">
                <input type="tel" placeholder="CPF" v-mask="'###.###.###-##'" v-model="cpf" required>
            </div>
            <div class="form-group">
                <input type="tel" placeholder="Celular/Whatsapp" v-mask="'(##) #####-####'" v-model="celular" required>
            </div>
            <div class="form-group">
                <input type="password" placeholder="Senha" v-model="senha" required>
            </div>
            <div class="form-group">
                <input type="password" placeholder="Repetir senha" v-model="senha2" required>
            </div>
            <div class="form-group pb-2">
                <button type="submit" class="btn btn-success w-100 text-uppercase fw-600">Criar Conta</button>
            </div>
            <div class="cadastre_btn font-14"><p>Já possui uma conta? <router-link to="login">Acesse agora</router-link></p></div>
            <div v-if="alerta">
                <div v-for="a in alerta" class="alert alert-danger font-14 mt-3" role="alert" v-html="a[0]"></div>
            </div>
        </form>
        <loader v-if="loader" />
    </div>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Auth.vue"
export default {
    name: 'Cadastro',
    components: {
        BaseTemplate
    },
    data() {
            return {
                nome: '',
                email: '',
                celular: '',
                cpf: '',
                senha: '',
                senha2: '',
                alerta: '',
                loader: false
            };
        },
        methods: {
            cadastro(){
                this.loader = true;
                this.$http.post(this.$urlAPI + `/cadastro`, {
                        name: this.nome,
                        email: this.email,
                        celular: this.celular,
                        cpf: this.cpf,
                        password: this.senha,
                        password_confirmation: this.senha2
                    })
                    .then(response => {
                        if(response.data.status == true){
                            this.$router.push('/ativar-conta');
                        }
                                          
                    })
                    .catch(error => {
                        this.loader = false;
                        this.alerta = error.response.data.msg;
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