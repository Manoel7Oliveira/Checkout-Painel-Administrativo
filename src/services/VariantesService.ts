import { Variantes } from "../models/Variantes";
import VariantesRepository from "../repositories/VariantesRepository";

class VariantesService {

    constructor(private readonly _variantesRepository: VariantesRepository) { }

    async adicionar(dados: Variantes[]) {
        return await this._variantesRepository.adicionar(dados);
    }
}

export default VariantesService;