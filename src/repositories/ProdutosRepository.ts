import { PrismaFactory } from "../factories/PrismaFactory";
import { Produtos } from "../models/Produtos";

class ProdutosRepository {

    async adicionar(dados: Produtos): Promise<Produtos> {
        return await PrismaFactory.produtos.create({
            data: dados
        });
    }
}

export default ProdutosRepository;