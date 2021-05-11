<template>
    <div class="modal_share">
        <div class="row">
            <div class="col-md-4 px-0">
                <div class="foto" v-bind:style="{ backgroundImage: 'url(' + cont.foto + ')' }"></div>
            </div>
            <div class="col-md-8">
                <div class="cont">
                    <div class="titulo fw-300 text-uppercase" v-html="cont.nome_formatado"></div>
                    <div class="local fw-600 mb-3 text-primary">{{cont.local_1}} - {{cont.local_2}}</div>
                    <p>Compartilhe o link e apresente o Ville Hibisco para
                        seus amigos.</p>
                    <div class="pt-4">
                        <div class="link_compartilha mb-4"><button class="btn btn-link"  v-clipboard="() => cont.link+'?uc='+this.$store.getters.getUsuario.uc" v-clipboard:success="copySucesso">{{cont.link+'?uc='+this.$store.getters.getUsuario.uc}}</button></div>
                        <h6 class="fw-600 text-center mb-4">Clique e Compartilhe</h6>
                        <share :url="cont.link+'?uc='+this.$store.getters.getUsuario.uc"
                            :titulo="cont.titulo + ' - More bem no apê dos seus sonhos!'"
                            :desc="cont.desc"
                            :res="cont.titulo + ' - More bem no apê dos seus sonhos!'" hashtag="meuprecon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Share from '@/components/Share.vue'
    export default {
        props: {
            cont: '',
        },
        components: {
            Share
        },
        methods: {
            copySucesso({value, event}) {
                const el = document.createElement('textarea');
                el.addEventListener('focusin', e => e.stopPropagation());
                el.value = value;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);

                this.$toast.open({
                    message: 'Link copiado com sucesso!',
                    type: 'success',
                    dismissible: true
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
 
    .modal_share {

        .titulo{
                font-weight: 600;
                font-size: 2rem;
                margin-bottom: 0.5rem;
                strong{
                    font-weight: 400;
                    display: table;
                    font-size: 1rem;
                    line-height: 1;
                }

            }
        .foto{
            height: calc(100% + 32px);
            border-radius: 3px 0 0 3px;
            width: 100%;
            background-color: $cinza2;
            margin-top: -16px;
            margin-bottom: -16px;
            margin-left: -1px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .cont {
            padding: 15px;

            .titulo{
                font-weight: 600;
                font-size: 2rem;
                margin-bottom: 0.5rem;
                strong{
                    font-weight: 400;
                    display: table;
                    font-size: 1rem;
                    line-height: 1;
                }

            }

            .link_compartilha {
                button {
                    font-size: 16px;
                    width: 100%;
                    text-align: center;
                    font-weight: 600;
                }
            }
        }
    }
</style>