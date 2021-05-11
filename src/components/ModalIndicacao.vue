<template>
    <div class="modal_indica">
        <h5 class="mb-4">Dados para contato</h5>

        <form action="" v-on:submit.prevent="newIndicacao">
            <div class="form_padrao">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group"><input type="text" placeholder="Nome" v-model="nome" required></div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group"><input type="email" placeholder="E-mail" v-model="email" required></div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group"><input type="tel" v-mask="'(##) #####-####'" placeholder="Celular/Whatsapp" v-model="celular" required></div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group"><input type="text" placeholder="Empreendimento" v-model="empreendimento"></div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select name="uf" id="uf" v-model="uf" required>
                                <option value="">Estado</option>
                                <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group"><input type="text" placeholder="Cidade" v-model="cidade" required></div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group"><input type="text" placeholder="Regiões de interesse" v-model="regioes"></div>
                    </div>
                    <div class="col-md-4 offset-md-8">
                        <button type="submit" class="btn btn-success text-uppercase font-14 fw-600 py-3 w-100">Fazer indicação</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loader: false,
                nome: '',
                email: '',
                celular: '',
                empreendimento: '',
                uf: '',
                cidade: '',
                regioes: '',
            }
        },
        components: {
        },
        methods: {
            newIndicacao(){
                this.loader = true;
                this.$http.post(this.$urlAPI + `/add-indicacao`, {
                    nome: this.nome,
                    email: this.email,
                    celular: this.celular,
                    empreendimento: this.empreendimento,
                    uf: this.uf,
                    cidade: this.cidade,
                    regioes: this.regioes,
                    })
                    .then(response => {
                        this.$emit('novoIndi', response.data);
                        this.$bvModal.hide('indicacao');
                        this.$toast.open({
                            message: 'Indicação realizada com sucesso!',
                            type: 'success',
                            dismissible: true
                        });
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
 
</style>