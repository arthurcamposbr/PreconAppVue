<template>
  <base-template>
    <section class="carteira">
        <Breadcrumb nome="Minha Carteira" />
        <loader v-if="loader" />

        <div class="container mb-5">
          <div class="row">
            <div class="col-md-3 mb-md-0 mb-4 pr-md-5">
              <div class="saldo mb-4">
                <h5 class="mb-3 fw-600">Saldo Bloqueado</h5>
                <div class="total">
                  <small>R$</small> 0,00
                </div>
              </div>
              <div class="saldo mb-4">
                <h5 class="mb-3 fw-600">Total Recebido</h5>
                <div class="total text-success">
                  <small>R$</small> 0,00
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="tabela">
                <h5 class="mb-3 fw-600">Histórico de Transações</h5>
                <table class="table table-striped table-responsive-md">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Descrição</th>
      <th scope="col">Tipo</th>
      <th scope="col">Data e Hora</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-none">
      <th scope="row" class="font-14">#123</th>
      <td class="font-14">Comissão ref. #123 transferida para conta bancária</td>
      <td class="font-14">Transferência</td>
      <td class="font-14">29/12/2020 - 14:30</td>
      <td class="font-14">R$ 500,00</td>
    </tr>
  </tbody>
</table>
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
    name: 'Carteira',
    components: {
        BaseTemplate,
        Breadcrumb
    },
    data() {
      return {
        loader: false
      }
    }
}
</script>

<style lang="scss" scoped>
  .saldo{
    .total{
      background-color: $cinza;
      padding: 15px;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 700;
      small{
        font-size: .9rem;
        line-height: .9rem;
        vertical-align: middle;
      }
    }
  }
</style>