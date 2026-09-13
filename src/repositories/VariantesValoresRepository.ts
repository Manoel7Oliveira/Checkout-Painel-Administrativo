import { PrismaFactory } from "../factories/PrismaFactory";
import { VariantesValores } from "../models/VariantesValores";

class VariantesValoresRepository {

    async adicionarVarios(dados: VariantesValores[]) {
        return await PrismaFactory.variantesValores.createMany({
            data: dados
        });
    }

    async desativar(id: string) {
        return await PrismaFactory.variantesValores.update({
            where: {
                id
            },
            data: {
                ativo: false
            }
        })
    }
}

export default VariantesValoresRepository;