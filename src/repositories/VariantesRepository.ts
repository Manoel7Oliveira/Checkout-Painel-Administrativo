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
}

export default VariantesRepository;
