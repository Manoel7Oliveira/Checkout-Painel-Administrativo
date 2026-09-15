import CategoriasRepository from "../repositories/CategoriasRepository"

class CategoriasService {

    constructor(private readonly _categoriasRepository: CategoriasRepository) { }

    async buscarTodas() {
        return await this._categoriasRepository.buscarTodas();
    }
}

export default CategoriasService;