import { string, object, array, InferType } from "yup";

export const Adicionar = object().shape({
    nome: string().required("O nome é obrigatório!"),
    valores: array(object().shape({
        valor: string().required("Defina um nome para o atributo.")
    }).nullable())

});

export type IAdicionarAtributo = InferType<typeof Adicionar>;