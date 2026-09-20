import { IAdicionarProduto, IAdicionarVariante, IEditarProduto, IEditarVariante } from "../controllers/schemas/ProdutosSchema";
import { Variantes } from "../models/Variantes";
import CategoriasRepository from "../repositories/CategoriasRepository";
import ProdutosRepository from "../repositories/ProdutosRepository";
import VariantesService from "./VariantesService";

class ProdutosService {

    constructor(
        private readonly _produtosRepository: ProdutosRepository,
        private readonly _variantesService: VariantesService,
    ) { }

    async buscarTodosProdutos() {
        return await this._produtosRepository.buscarTodos();
    }

    organizarPayloadAdicionarVariantes(id_produto: string, dados: IAdicionarVariante) {

        if (dados) {

            const payload = dados.map((variante) => {

                const {
                    sku,
                    preco,
                    comprimento,
                    estoque,
                    peso,
                    combo,
                    altura,
                    largura,
                    ativo,
                    json_caracteristicas,
                    principal,
                } = variante;

                return {
                    id_produto,
                    sku,
                    preco,
                    comprimento,
                    estoque,
                    peso,
                    combo,
                    altura,
                    largura,
                    ativo,
                    json_caracteristicas: json_caracteristicas ? json_caracteristicas : [],
                    principal,
                }
            });

            return payload;

        }

        return [];
    }

    organizarPayloadAdicionarValorVariantes(variantesProdutos: Variantes[], dados: IAdicionarVariante) {
        const retorno = variantesProdutos.map((variante, index) => {
            const varianteCorrespondenteFront = dados?.find(item => item.sku === variante.sku);

            if (varianteCorrespondenteFront && varianteCorrespondenteFront.valores_atributos) {

                const payload = []

                for (let varianteFront of varianteCorrespondenteFront.valores_atributos) {
                    payload.push({
                        id_valor_atributo: varianteFront as string,
                        id_variante: variante.id as string,
                        ativo: true
                    });
                }


                return payload;
            }

            return [];
        });

        return retorno.flat();
    }

    async adicionar(dados: IAdicionarProduto) {

        const payloadAdicionarProduto = {
            id_categoria: dados.id_categoria,
            nome: dados.nome,
            ativo: dados.ativo,
            ...(dados.descricao !== undefined && { descricao: dados.descricao })
            //“Se a condição for verdadeira, espalhe essa propriedade dentro do objeto.”
        }

        const produtoAdicionado = await this._produtosRepository.adicionar(payloadAdicionarProduto);

        if (dados.variantes) {
            const payloadAdicionarVariantes = this.organizarPayloadAdicionarVariantes(
                produtoAdicionado.id as string,
                dados.variantes
            );
            await this._variantesService.adicionar(payloadAdicionarVariantes);

            const variantesProduto = await this._variantesService.buscarTodas(produtoAdicionado.id as string);
            const payloadAdicionarVariantesValores = this.organizarPayloadAdicionarValorVariantes(variantesProduto, dados.variantes);

            await this._variantesService.adicionarVariantesValores(payloadAdicionarVariantesValores);
        }

        return { status: "success" };
    }

    async editarProduto(dados: IEditarProduto, id: string) {
        const payloadEditarProduto = {
            nome: dados.nome,
            ...(dados.descricao !== undefined && { descricao: dados.descricao })
        }
        return await this._produtosRepository.editar(payloadEditarProduto, id);
    }

    async editarVariante(dados: IEditarVariante, id: string) {
        return await this._variantesService.editarVariante(dados, id);
    }

    async excluirProduto(id: string) {
        return await this._produtosRepository.excluir(id);
    }

    async excluirVariante(id: string) {
        return await this._variantesService.desativar(id);
    }

}

export default ProdutosService;