import { PrismaFactory } from "../factories/PrismaFactory";
import { Variantes } from "../models/Variantes";

class VariantesRepository {

    async adicionar(dados: Variantes[]) {
        return await PrismaFactory.variantes.createMany({
            data: dados
        });
    }
}

export default VariantesRepository;
