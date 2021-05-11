import moment from 'moment'
import axios from "axios"

export const func = {
    currency: (data) => {
        var formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          return formatter.format(data);
    },
    data: (data) => {
        return moment(data).format('DD/MM/YYYY');
    },
    datahora: (data) => {
        return moment(data).format('DD/MM/YYYY - HH:mm');
    },
    cep: (data) => {
        var instance = axios.create();
        delete instance.defaults.headers.common['Authorization'];
        return instance.get(`https://viacep.com.br/ws/${data}/json/`);
    },
    primeiroNome: (data) => {
        var primeiro = data.replace(/ .*/,'');
        return primeiro;
    }
}