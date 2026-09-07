import { IEditarProduto } from "../controllers/schemas/ProdutosSchema";
import { PrismaFactory } from "../factories/PrismaFactory";
import { Produtos } from "../models/Produtos";

class ProdutosRepository {

    async adicionar(dados: Produtos): Promise<Produtos> {
        return await PrismaFactory.produtos.create({
            data: dados
        });
    }

    async editar(dados: Partial<Produtos>, id: string) {
        return await PrismaFactory.produtos.update({
            where: {
                id
            },
            data: dados
        });

    }
}

export default ProdutosRepository;