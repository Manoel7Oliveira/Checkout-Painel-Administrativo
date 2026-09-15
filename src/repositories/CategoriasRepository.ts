import { PrismaFactory } from "../factories/PrismaFactory";

class CategoriasRepository {

    async buscarTodas() {
        return await PrismaFactory.categorias.findMany({
            where: {
                ativo: true
            }
        })
    }
}

export default CategoriasRepository;