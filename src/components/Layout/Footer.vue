<template>
    <footer>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-auto mb-md-0 mb-4">
                    © Precon Engenharia 2020 – Todos os direitos reservados. – CNPJ: 22508739/0001-41
                </div>
                <div class="col-md-auto">
                    <a href="https://meuprecon.com.br" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/logo_footer.png" alt="Precon"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    footer{
        background-color: $cinza;
        padding: 15px 0;
        font-size: 14px;
    }
</style>