import { string, object, array, boolean, number, InferType } from "yup";

export const AdicionarVariante = array().of(
    object({
        sku: string().required(),
        valores_atributos: array().of(string()),
        preco: number().required(),
        ativo: boolean().required(),

        json_caracteristicas: array().of(object({
            chave: string().required(),
            valor: string().required()
        })).nullable(),

        peso: number().required(),
        comprimento: number().required(),
        largura: number().required(),
        altura: number().required(),
        estoque: number().required(),
        principal: boolean().required(),
        combo: boolean().required(),
        componentes: array().nullable(),
        // TODO colocar shape em imagens
        imagens: array().nullable(),
    })
).nullable()

export const EditarVariante = object().shape({
    preco: number().required(),
    peso: number().required(),
    comprimento: number().required(),
    largura: number().required(),
    altura: number().required(),
    estoque: number().required(),
})

export const AdicionarProduto = object().shape({
    id_categoria: string().required(),
    nome: string().required(),
    descricao: string().nullable(),
    ativo: boolean().required(),
    variantes: AdicionarVariante

});

export const EditarProduto = object().shape({
    nome: string().required(),
    descricao: string().nullable()
})

export type IAdicionarProduto = InferType<typeof AdicionarProduto>;
export type IAdicionarVariante = InferType<typeof AdicionarVariante>
export type IEditarProduto = InferType<typeof EditarProduto>;
export type IEditarVariante = InferType<typeof EditarVariante>;