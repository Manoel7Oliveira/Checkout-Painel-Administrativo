import { string, object, array, InferType } from "yup";

export const Adicionar = object().shape({
    nome: string().required("O nome é obrigatório!"),
    valores: array(object().shape({
        valor: string().required("Defina um nome para o atributo.")
    }).nullable())
});

export const AdicionarValor = object().shape({
    valor: string().required("O nome do valor do atributo é obrigatório!")
});

export const EditarAtributo = object().shape({
    nome: string().required("O nome é obrigatório!")
});

export const EditarValorAtributo = object().shape({
    valor: string().required("O nome do valor do atributo é obrigatório!")
});

export type IEditarValorAtributo = InferType<typeof EditarValorAtributo>;
export type IEditarAtributo = InferType<typeof EditarAtributo>;
export type IAdicionarValor = InferType<typeof AdicionarValor>;
export type IAdicionarAtributo = InferType<typeof Adicionar>;


// Quando adicionamos valor há um outro dado que ja existe, enviamos o id daquele dado
// na url, ex adicionar/valor/id_atributo, e o valor do atributo no body. 
// O id do atributo é obrigatório para adicionar um valor a ele.