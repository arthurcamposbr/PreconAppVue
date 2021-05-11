<template>
    <base-template>
        <section class="home">
            <slider />
            <div class="container py-6">
                <div class="col-md-7 px-0 mx-auto text-center">
                    <h3 class="fw-700 mb-4">Compartilhe o link e apresente o nosso site para
seus amigos.</h3>
<div class="link_compartilha mb-4"><button class="btn btn-link" v-clipboard="'https://meuprecon.com.br/?uc='+this.$store.getters.getUsuario.uc" v-clipboard:success="copySucesso">https://meuprecon.com.br/?uc={{this.$store.getters.getUsuario.uc}}</button></div>
<h5 class="mb-4">Clique e Compartilhe</h5>
<share :url="'https://meuprecon.com.br/?uc='+this.$store.getters.getUsuario.uc" titulo="Precon Engenharia - More bem no apê dos seus sonhos!" desc="Simule seu desconto com a menor taxa de juros do mercado. Encontre o apartamento dos seus sonhos com a Precon Engenharia. Acesse e saiba mais!" res="More bem no apê dos seus sonhos!" hashtag="meuprecon" />
                </div>
            </div>
            <div class="sobre text-center pb-5">
            <div class="container">
                <h2 class="h1 fw-300 mb-3">Como funciona?</h2>
                <div class="desc col-md-6 px-0 mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus lacus turpis, nec scelerisque orci pulvinar vitae.</div>
                <div class="row">
                    <div class="col-md-3 px-2 mb-3">
                        <div class="card h-100">
                            <div class="card-body px-0">
                                <img src="@/assets/img/01.svg" alt="">
                            </div>
                            <div class="card-footer">
                                <div class="fw-600">Você se cadastra na plataforma</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 px-2 mb-3">
                        <div class="card h-100">
                            <div class="card-body px-0">
                                <img src="@/assets/img/02.svg" alt="">
                            </div>
                            <div class="card-footer">
                                <div class="fw-600">Compartilha campanhas e empreendimentos com seus contatos e redes sociais</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 px-2 mb-3">
                        <div class="card h-100">
                            <div class="card-body px-0">
                                <img src="@/assets/img/03.svg" alt="">
                            </div>
                            <div class="card-footer">
                                <div class="fw-600">Você pode ganhar a partir de R$300,00 por indicação concretizada<span class="text-primary">*</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 px-2 mb-3">
                        <div class="card h-100">
                            <div class="card-body px-0">
                                <img src="@/assets/img/04.svg" alt="">
                            </div>
                            <div class="card-footer">
                                <div class="fw-600">E receber a bonificação direto em sua conta bancária.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="font-14 pt-3">(*) Confira regulamento para mais detalhes.</div>
            </div>
        </div>
        </section>
    </base-template>
</template>

<script>
import BaseTemplate from "@/views/Dashboard.vue"
import Slider from '@/components/Layout/Slider.vue'
import Share from '@/components/Share.vue'
export default {
    name: 'Home',
    components: {
        BaseTemplate,
        Slider,
        Share
    },
    methods: {
        copySucesso(){
            this.$toast.open({
                message: 'Link copiado com sucesso!',
                type: 'success',
                dismissible: true
            });
        }
    },
    created(){
    }
}
</script>

<style lang="scss" scoped>

</style>