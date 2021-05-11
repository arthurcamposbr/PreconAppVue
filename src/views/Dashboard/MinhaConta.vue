<template>
  <base-template>
    <section class="minha-conta">
        <Breadcrumb nome="Minha Conta" />
        <loader v-if="loader" />

        <div class="container mb-5">
          <div class="row">
            <div class="col-md-3 mb-md-0 mb-4">
              <div class="list-group text-center">
                <button class="list-group-item list-group-item-action active">
                  Meus dados cadastrais
                </button>
                <button class="list-group-item list-group-item-action">Meus dados bancários</button>
                <button class="list-group-item list-group-item-action">Sair</button>
              </div>
            </div>
            <div class="col-md-9">
              <div class="input_foto row mx-0 align-items-center mb-4">
                  <input class="order-2" type="file" name="foto" id="foto" @change="uploadImage" />
                  <label for="foto" class="order-1 mr-md-2" v-bind:style="[this.$store.getters.getUsuario.perfil ? { backgroundImage: 'url(' + this.$store.getters.getUsuario.perfil + ')' } : '']">
                    <span class="icon-foto"></span>
                  </label>
                </div>
              <div class="card">
                <div class="card-body">
                  <h6 class="fw-600 mb-3">Editar dados</h6>
                    <form action="">
                      <div class="form_padrao">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="text" placeholder="Nome completo" v-model="dados.name" required>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="email" placeholder="E-mail" class="disabled" v-model="dados.email" disabled required>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="tel" placeholder="Celular" v-model="dados.celular" required>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input type="tel" placeholder="CPF" class="disabled" v-model="dados.cpf" disabled required>
                            </div>
                          </div>
                        </div>
                        <h6 class="fw-600 mb-3">Atualizar Senha</h6>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group"><input type="password" name="" id="" placeholder="Senha"></div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group"><input type="password" name="" id="" placeholder="Repetir senha"></div>
                          </div>
                          <div class="col-md-4 offset-md-8">
                        <button type="submit" class="btn btn-success text-uppercase font-14 fw-600 py-3 w-100">Atualizar dados</button>
                    </div>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  </base-template>
</template>

<script>
import BaseTemplate from "@/views/Dashboard.vue"
import Breadcrumb from "@/components/Layout/Breadcrumb.vue"
export default {
    name: 'MinhaConta',
    components: {
        BaseTemplate,
        Breadcrumb
    },
    data() {
      return {
        loader: false,
        dados: '',
        urlFoto: '',
        alerta: ''
      }
    },
    methods:{
      uploadImage(e) {
      let arquivo = e.target.files || e.dataTransfer.files;
      if(!arquivo.length){
        return;
      }

      let reader = new FileReader();
      reader.onload = (e) => {
        this.dados.perfil = e.target.result;
      };
      reader.readAsDataURL(arquivo[0]);
    },
    atualizaDados(){
      this.loader = true;
      this.alerta = '';
      this.$http.put(this.$urlAPI + `/atualiza-dados`, this.dados)
        .then(response => {
            this.loader = false;
            this.dados = response.data;
            this.$store.getters.getUsuario.name = response.data.name;
            this.$store.getters.getUsuario.perfil = response.data.perfil;
            this.dados.perfil = null;
        })
        .catch(e => {
            this.loader = false;
            this.alerta = e.response.data.msg;
        })
    }
    },
    created() {
    this.$http.get(this.$urlAPI + `/me`)
        .then(response => {
            this.dados = response.data.usuario;
            this.dados.perfil = null;
        })
        .catch(e => {
            console.log(e);
        })
    }
}
</script>

<style lang="scss" scoped>
.input_foto{
  label{
    display: table;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: $secondary;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>