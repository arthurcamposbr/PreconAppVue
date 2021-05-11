<template>
  <base-template>
    <section class="indicacoes">
        <Breadcrumb nome="Minhas Indicações" />
        <div class="ind_header mb-5">
          <div class="container">
            <div class="row align-items-center">
            <div class="col-md-9 mb-md-0 mb-3">
              <div class="busca">
                <input v-on:keyup="busca(q)" type="search" name="filtro" id="filtro" placeholder="Buscar por local, id ou data e pressione Enter" v-model="q">
              </div>
            </div>
            <div class="col-md-3 text-md-right text-center">
              <button @click="criaIndicacao" class="btn btn-success text-uppercase font-14 fw-600 py-3 w-100">Fazer indicação</button>
            </div>
          </div>
          </div>
        </div>
        <loader v-if="loader" />

        <div v-if="indi" class="tabela mb-5">
          <div class="container">
            <table class="table table-striped table-responsive-md">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">E-mail</th>
      <th scope="col">Data Cadastro</th>
      <th scope="col">Status</th>
      <th scope="col">Val. Indicação</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="indi in indi" :key="indi.id">
      <th scope="row">#{{indi.id}}</th>
      <td>{{indi.nome}}</td>
      <td>{{indi.email}}</td>
      <td>{{$func.data(indi.created_at)}}</td>
      <td><span class="text-warning fw-600">aguardando contato</span></td>
      <td>R$ 0,00</td>
    </tr>
  </tbody>
</table>
<p v-if="!indi" class="text-center">Nenhuma indicação encontrada.</p>
          </div>
        </div>

        <b-modal id="indicacao" size="lg" centered hide-footer hide-header>
    <button @click="$bvModal.hide('indicacao')" class="fecha_modal"><img src="@/assets/img/close.svg" alt="Fechar"></button>
    <modal-indicacao @novoIndi="carregaIndi" />
</b-modal>

    </section>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Dashboard.vue"
import Breadcrumb from "@/components/Layout/Breadcrumb.vue"
import ModalIndicacao from "@/components/ModalIndicacao.vue"
export default {
    name: 'Indicacoes',
    components: {
        BaseTemplate,
        Breadcrumb,
        ModalIndicacao
    },
    data() {
      return {
        q: '',
        indi: '',
        loader: false
      }
    },
    methods: {
      busca(q){
        console.log(q)
      },
      criaIndicacao(){
            this.$bvModal.show('indicacao');
        },
      carregaIndi(data){
        this.indi.unshift(data);
      }
    },
    created(){
      this.loader = true;
        this.$http.get(this.$urlAPI + `/indicacoes`)
        .then(response => {
            this.loader = false;
            this.indi = response.data;
        })
        .catch(e => {
            this.loader = false;
            console.log(e);
        })
    }
}
</script>

<style lang="scss" scoped>
  .busca{
    input{
      width: 100%;
      max-width: 540px;
      height: 45px;
      padding: 0 15px;
      font-size: 14px;
      border-radius: 0;
      border: solid 1px $cinza;
      color: $primary;
      outline: none!important;
      &::placeholder{
        color: $cinza2;
      }
    }
  }

</style>