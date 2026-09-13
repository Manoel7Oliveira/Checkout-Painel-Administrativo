import { IEditarVariante } from "../controllers/schemas/ProdutosSchema";
import { PrismaFactory } from "../factories/PrismaFactory";
import { Variantes } from "../models/Variantes";

class VariantesRepository {

    async adicionar(dados: Variantes[]) {
        return await PrismaFactory.variantes.createMany({
            data: dados
        });
    }

    async buscarTodas(id_produto: string) {
        return await PrismaFactory.variantes.findMany({
            where: {
                id_produto
            }
        });
    }

    async editar(dados: IEditarVariante, id: string) {
        return await PrismaFactory.variantes.update({
            where: {
                id
            },
            data: dados
        });
    }

    async desativar(id: string) {
        return await PrismaFactory.variantes.update({
            where: {
                id
            },
            data: {
                ativo: false
            }
        });
    }
}

export default VariantesRepository;
