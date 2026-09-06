
import { PrismaFactory } from "../factories/PrismaFactory"
import { Atributos } from "../models/Atributos";

class AtributosRepository {

    async adicionar(nome: string) {
        return await PrismaFactory.atributos.create({
            data: {
                nome,
            },
        });
    }

    async editar(dados: Atributos, id_atributo: string) {
        return await PrismaFactory.atributos.update({
            where: {
                id: id_atributo,
            },
            data: dados
        });
    }

    async buscarTodos() {
        return await PrismaFactory.atributos.findMany({
            include: {
                valores_atributos: true
            }

        });
    }
}

export default AtributosRepository