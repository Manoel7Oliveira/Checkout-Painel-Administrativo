import { IAdicionarProduto, IAdicionarVariante, IEditarProduto } from "../controllers/schemas/ProdutosSchema";
import { Variantes } from "../models/Variantes";
import ProdutosRepository from "../repositories/ProdutosRepository";
import VariantesService from "./VariantesService";

class ProdutosService {

    constructor(
        private readonly _produtosRepository: ProdutosRepository,
        private readonly _variantesService: VariantesService
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

    async adicionar(dados: IAdicionarProduto) {

        const payloadAdicionarProduto = { // Aqui deveria ser tipado com IAdicionarProduto, Rever isso depois! 
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
        }

        //console.log(dados.variantes);

        return { status: "success" };
    }

    async editarProduto(dados: IEditarProduto, id: string) {
        const payloadEditarProduto = {
            nome: dados.nome,
            ...(dados.descricao !== undefined && { descricao: dados.descricao })
        }
        return await this._produtosRepository.editar(payloadEditarProduto, id);
    }

    async excluirProduto(id: string) {
        return await this._produtosRepository.excluir(id);
    }

}

export default ProdutosService;