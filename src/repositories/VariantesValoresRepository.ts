import { PrismaFactory } from "../factories/PrismaFactory";
import { VariantesValores } from "../models/VariantesValores";

class VariantesValoresRepository {

    async adicionarVarios(dados: VariantesValores[]) {
        return await PrismaFactory.variantesValores.createMany({
            data: dados
        });
    }
}

export default VariantesValoresRepository;