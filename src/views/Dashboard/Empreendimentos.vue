<template>
  <base-template>
    <section class="empreendimentos">
        <Breadcrumb nome="Empreendimentos" />
        <div class="container">
            <h1 class="fw-300 mb-3">Compartilhe nossos Empreendimentos</h1>
            <div class="mb-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus lacus turpis, nec scelerisque orci pulvinar vitae. Curabitur sit amet felis id sapien finibus placerat nec in diam. Sed est ante, congue at feugiat ac, posuere sed ipsum.</p>
            </div>
            <div class="filtro pb-2 d-none">
                <h6 class="fw-600 text-center mb-3">Filtrar Empreendimentos</h6>
                <form action="">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="form-group">
                                <select name="uf" id="uf">
                                    <option value="">Estado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="form-group">
                                <select name="cidade" id="cidade">
                                    <option value="">Cidade</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="form-group">
                                <select name="bairro" id="bairro">
                                    <option value="">Bairro</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group"><button type="submit" class="btn btn-primary w-100 font-14 text-uppercase">Filtrar</button></div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="cta_precon text-uppercase text-white">
                <div class="row align-items-center justify-content-between text-lg-left text-center">
                    <div class="col-lg-auto mb-lg-0 mb-4">
                    <img src="@/assets/img/logo_w.svg" alt="Precon">
                </div>
                <div class="col-lg-auto mb-lg-0 mb-4">
                    <h5 class="fw-300 mb-0">Compartilhe nosso site</h5>
                    <h2 class="fw-800 mb-0">E aumente suas chances</h2>
                </div>
                <div class="col-lg-auto mb-lg-0 mb-4">
                    <button class="btn btn-light text-uppercase fw-500 font-14 px-md-5 py-3 w-100">Compartilhar</button>
                </div>
                </div>
            </div>
            <div class="loop_empreendimentos mb-5">
                <div v-if="empreendimentos" class="row">
                    
                    <div v-for="emp in empreendimentos" class="col-lg-4 col-md-6 my-3" :key="emp.id">
                        <div class="card" v-bind:style="{ backgroundImage: 'url(' + emp.foto + ')' }">
                            <div class="cont">
                                <div class="titulo text-uppercase" v-html="emp.nome_formatado"></div>
                                <div class="local fw-600 mb-3">{{emp.local_1}} - {{emp.local_2}}</div>
                                <button class="btn btn-success w-100 text-uppercase font-14 fw-600 py-3" @click="compartilha(emp)">Compartilhar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <loader v-if="loader" />
            </div>

        </div>

<b-modal id="compartilha" size="xl" centered hide-footer hide-header>
    <button @click="$bvModal.hide('compartilha')" class="fecha_modal"><img src="@/assets/img/close.svg" alt="Fechar"></button>
    <modal-share :cont="id" />
</b-modal>

    </section>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Dashboard.vue"
import Breadcrumb from "@/components/Layout/Breadcrumb.vue"
import ModalShare from "@/components/ModalShare.vue"
export default {
    name: 'Empreendimentos',
    data() {
    return {
      id: '',
      loader: false,
      empreendimentos: '',
      pg: 1,
      total: 1,
    };
  },
    components: {
        BaseTemplate,
        Breadcrumb,
        ModalShare
    },
    methods: {
        compartilha(emp){
            this.id = emp;
            this.$bvModal.show('compartilha');
        },
        scroll (person) {
    window.onscroll = () => {
        if(this.pg < this.total){
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.loader = true;
        //delete this.$http.defaults.headers.common['Authorization'];
        if (this.searchItemsSource) {
          this.searchItemsSource.cancel('Cancel previous request');
      }
      const CancelToken = this.$http.CancelToken;
      this.searchItemsSource = CancelToken.source();

        this.$http.get(`https://meuprecon.com.br/wp-json/empreendimentos/list/?pagina=`+(parseInt(this.pg)+1), {
          cancelToken: this.searchItemsSource.token
                    })
        .then(response => {
            this.loader = false;
            this.empreendimentos.push(...response.data.empreendimentos);
            this.pg = response.data.atual;
            this.total = response.data.paginas;
        })
        .catch(e => {
            console.log(e);
        })
        .catch(function(thrown) {
                          this.loader = true;
                          if (this.$http.isCancel(thrown)) {
                            this.resposta = false;
                          } else {
                            this.resposta = true;
                          }
                      })
      }
    }
    };
  }
    },
    created(){
        this.loader = true;
        //delete this.$http.defaults.headers.common['Authorization'];

        this.$http.get(`https://meuprecon.com.br/wp-json/empreendimentos/list`)
        .then(response => {
            this.loader = false;
            this.empreendimentos = response.data.empreendimentos;
            this.pg = response.data.atual;
            this.total = response.data.paginas;
        })
        .catch(e => {
            this.loader = false;
            console.log(e);
        })
    },
    mounted() {
  this.scroll(this.person);
}
}
</script>

<style>

</style>