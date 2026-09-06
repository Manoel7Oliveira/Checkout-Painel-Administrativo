import { PrismaFactory } from "../factories/PrismaFactory";

import { ValoresAtributos } from "../models/ValoresAtributos";

class ValoresAtributosRepository {

    async adicionar(dados: ValoresAtributos[]) {
        return await PrismaFactory.valoresAtributos.createMany({
            data: dados
        });
    }

    async buscarValoresPorIdAtributo(id_atributo: string) {
        return await PrismaFactory.valoresAtributos.findMany({
            where: {
                id_atributo
            }
        });
    }

    async editar(dados: any, id: string) {
      return await PrismaFactory.valoresAtributos.update({
            where: {
                id
            },
            data: dados
        })
    }


}

export default ValoresAtributosRepository