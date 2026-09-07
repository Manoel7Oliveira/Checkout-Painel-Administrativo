import { IAdicionarProduto, IEditarProduto } from "../controllers/schemas/ProdutosSchema";
import ProdutosRepository from "../repositories/ProdutosRepository";

class ProdutosService {

    constructor(
        private readonly _produtosRepository: ProdutosRepository
    ) { }

    async adicionar(dados: IAdicionarProduto) {

        const payloadAdicionarProduto = {
            id_categoria: dados.id_categoria,
            nome: dados.nome,
            ativo: dados.ativo,
            ...(dados.descricao !== undefined && { descricao: dados.descricao })
            //“Se a condição for verdadeira, espalhe essa propriedade dentro do objeto.”
        }

        const produtoAdicionado = await this._produtosRepository.adicionar(payloadAdicionarProduto);

        console.log(produtoAdicionado);

        return produtoAdicionado;
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