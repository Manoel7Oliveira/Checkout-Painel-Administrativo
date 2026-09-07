import { string, object, array, boolean, number, InferType } from "yup";

export const AdicionarProduto = object().shape({
    id_categoria: string().required(),
    nome: string().required(),
    descricao: string().nullable(),
    ativo: boolean().required()

});

export type IAdicionarProduto = InferType<typeof AdicionarProduto>;